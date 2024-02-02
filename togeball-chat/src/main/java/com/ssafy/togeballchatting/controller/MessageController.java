package com.ssafy.togeballchatting.controller;

import com.ssafy.togeballchatting.dto.ChatMessageDto;
import com.ssafy.togeballchatting.entity.MessageType;
import com.ssafy.togeballchatting.service.AwsS3Service;
import com.ssafy.togeballchatting.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Controller
@RequiredArgsConstructor
public class MessageController {

    private final ChatMessageService chatMessageService;
    private final AwsS3Service s3Service;
    private final SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("chat.{roomId}")
    public void messaging(@DestinationVariable(value = "roomId") Long roomId,
                          @Header(value = "Authorization") String token,
                          @Payload ChatMessageDto messageDto) {

        log.info("roomId: {}, message: {}, token: {}", roomId, messageDto, token);
        ChatMessageDto message = chatMessageService.save(messageDto);
        log.info("message: {}", message);
        messagingTemplate.convertAndSend("/topic/room." + roomId, message);
    }

    @PostMapping("/chat-server/chats/{roomId}/images")
    public ResponseEntity<?> uploadImage(@PathVariable(value = "roomId") Integer roomId,
                                         @RequestParam MultipartFile file,
                                         @RequestParam Integer senderId) throws Exception {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("이미지 파일을 전송해주세요.");
        }

        String contentType = file.getContentType();
        if (contentType != null && !contentType.startsWith("image")) {
            return ResponseEntity.badRequest().body("이미지 파일만 전송할 수 있습니다.");
        }

        String url = s3Service.upload(file);
        log.info("url: {}", url);
        ChatMessageDto message = chatMessageService.save(ChatMessageDto.builder()
                .roomId(roomId)
                .senderId(senderId)
                .type(MessageType.valueOf("IMAGE"))
                .content(url)
                .build());
        messagingTemplate.convertAndSend("/topic/room." + roomId, message);
        return ResponseEntity.noContent().build();
    }
}