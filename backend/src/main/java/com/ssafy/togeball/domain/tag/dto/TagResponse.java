package com.ssafy.togeball.domain.tag.dto;

import com.ssafy.togeball.domain.tag.entity.Tag;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TagResponse {

    private Integer id;
    private String content;
    private String type;

    public static TagResponse of(Tag tag) {
        return TagResponse.builder()
                .id(tag.getId())
                .content(tag.getContent())
                .type(tag.getType().toString())
                .build();
    }
}

