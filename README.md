
# ⚾️ Togeball - 야구 직관 메이트 매칭 플랫폼

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/4681b00b-2244-46a6-91e2-3c5475b80c6d" width="500" height="300">

## 목차
- 팀소개
- 역할 분담
- 프로젝트 소개
- 기술스택
- 핵심 기능
- 역할별 상세 보기
- 기타 산출물

## 팀소개

```
    안녕하세요? 5명의 I와 1명의 E가 모인 E와 I들 입니다.

    팀장 및 프론트 : 이운재
    프론트리더: 윤진아
    백엔드리더: 오형택
    인프라리더 및 프론트: 조권호
    백엔드 : 양유경
    백엔드 : 조아영
```

## 역할 분담

### 각자 맡은 핵심 기능
- 이운재 : 매칭 페이지, 마이페이지
- 윤진아 : 채팅 페이지, 알림페이지
- 조권호 : 인프라 구성, 프로필 수정페이지
- 오형택 : 알림 시스템, 채팅 시스템
- 양유경 : 매칭 알고리즘, 유저 API
- 조아영 : 매칭 시스템

## 프로젝트 소개

```
    함께 직관하고 싶은 사람들을 위한 직관 메이트 매칭 서비스 투게볼 !  
    
    같이보는 재미를 제공하기 위해 저희 투게볼이 딱 맞는 직관 메이트를 구해 드립니다. 

    '야구, 같이 보면 더 재밌잖아요'  슬로건 아래  매칭을 기반으로 하는 서비스를 제공합니다.
```

## 기술스택

### 프론트엔드
| TypeScript |    React   |  StyeldComponent   |  Zustand |
| :--------: | :--------: | :------: | :-----: |
|   <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/6a599791-e929-4e42-bd48-11cc921056b8" width="100" height="100">    |   <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/884ebfc7-33dd-461d-a2a0-127553ad4fb8" width="100" height="100">    | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/c9f8bade-912b-465f-8cb2-a250f4b56a1d" width="100" height="100"> | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/c38d6917-a859-4088-a55e-b63ad6707c8f" width="100" height="100"> |

### 백엔드

| SpringBoot |   MariaDB  |  MongoDB   |  Redis | RabbitMQ | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|   <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/21294d8f-089e-4bac-9c2c-3395f72b4978" width="100" height="100">    |   <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/07cdd54e-36d9-4fb6-9451-69032c23ec5f" width="100" height="100">    | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/c205b26c-5a5a-4625-9cd0-11e1c8d37ea0" width="100" height="100"> | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/30963995-09b6-4a83-85ca-2aa7bf516497" width="100" height="100"> | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/f0407621-1263-4b42-9bd3-e41cd208a549" width="100" height="100"> |

### 인프라

| Jenkins |   Docker  |  nginx   |  prometheus | Grafana | 
| :--------: | :--------: | :------: | :-----: | :--------: |
|   <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/136b3fe0-03ea-41d9-a249-9d164518352a" width="100" height="100">   | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/cc432552-b299-4cfb-af96-b67a9d949f3c" width="100" height="100">    | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/59b9dfc5-250c-4d91-9680-ad0dd1ee27bb" width="100" height="100"> | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/57aa3091-c672-40a7-a6d9-73e516d40ec6" width="100" height="100"> | <img src="https://github.com/ahjinU/React_Togeball/assets/99533526/4f3c9804-ba24-4a25-9fd2-74eb3f2ade48" width="100" height="100"> |



## 핵심 기능

### 매칭 시스템

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/32d973a9-c4a5-4404-a51e-a95127095878" width="1000" height="600">

- 매칭 
    - 프론트: 웹소켓을 이용한 통신, d3를 이용한 데이터 시각화 및 인터랙티브웹 구현
    - 백 : 유사도를 이용한 매칭 알고리즘 설계


### 채팅 시스템

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/214f2480-6f0e-4e28-b803-83dd8f15f002" width="1000" height="600">

- 채팅
    - 프론트: 웹소켓과 stomp 프로토콜을 이용한 통신, 이미지 전송 가능
    - 백: 채팅 서버 구현


## 역할별 상세 보기

### 프론트

#### 매칭 시스템

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/4d0728be-efc9-4f91-b625-30574df072fd" width="1000" height="600">

- 매칭 클릭 시 매칭을 시도하는 사람들과의 사용자 태그 기반 매칭 적용
- 상위 6개의 태그 애니메이션으로 표시
- 스케줄링 시간에 따라 2~6인으로 구성된 채팅방 생성
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/9038fcb0-dba6-41df-a1cf-4dbb027c68a0" width="500" height="300">
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/a033d86a-5ea7-4932-8426-7ca7ceac67c1" width="500" height="300">

- Chat GPT 이용하여 태그들 조합의 적절한 채팅방 이름 생성

#### 모집 채팅방

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/4ed79438-7d1e-4741-af54-204c3bb126f1" width="1000" height="600">

- 현재 활성화 된 채팅방 목록 제공
- 경기 일자, 응원팀에 맞는 채팅방 찾는 필터 기능 제공
- 페이지네이션 활용

#### 채팅방 생성

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/7a15251e-0ac7-4321-a103-88bfdc6dbc74" width="1000" height="600">

- 커스텀 주별 달력 활용하여 경기 선택
- 경기에 맞는 응원팀 항목 제한
- 사용자에 맞는 태그 입력 가능

#### 채팅방

##### 게임 채팅방 참여

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/721b856b-f4f9-406d-b784-ad6df8b9a74c" width="1000" height="600">

- 대화 참가자 모두 표시

#### 나의 채팅방 확인
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/07a753a4-3c7f-4111-8905-0a9244f504fd" width="1000" height="600">

- 나의 채팅방 목록 확인 및 채팅방 개별 알림
- 최근 메시지 확인, 클릭 시 채팅방 이동

#### 로그인 및 회원가입

- 회원가입
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/d2e9b51c-1e4b-4995-8ade-e745a8bef7a4" width="1000" height="600">

- 로그인
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/f17b399f-9362-4f01-b9fa-3cca68c75725" width="400" height="300">
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/d1930421-3f3a-46e8-87d7-9a075007e897" width="400" height="300">


#### 경기 캘린더

- 월별/주별 캘린더
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/c31d55ec-01de-4d90-a460-ed4c01ed8cb2" width="1000" height="600">

### 백엔드

#### Swagger API 확인

- 채팅방 API

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/df947fbe-cf5c-4e9e-83f3-e4098c2c858f" width="400" height="200">

- 매칭, 태그 API
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/59943f9b-fd01-48b5-bb24-0b89ac7af32a" width="400" height="200">

#### Postman API 확인

- 게시판, 리그, 매칭, 알림 API
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/f2608ba2-c2cf-4653-9185-dc1dacd786cf" width="200" height="300">

- 유저 API

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/66b1df5c-042d-496f-bdf8-a6832ba976df" width="200" height="300">

- 인증 API

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/97917e43-9b1a-4cf0-96a0-9295977d89be" width="300" height="200">


- 채팅방 API
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/fa890911-3c3c-47ac-b4ad-9e664c705110" width="200" height="400">


- 태그 API
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/5f7c499b-d779-4072-ab6d-d90681c32626" width="300" height="200">

### 인프라

#### 아키텍처 설계

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/6c262d39-c6bd-4d63-bd55-911e9a1e3a52" width="800" height="600">

#### 모니터링 구현

- 시스템 모니터링
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/eccf99aa-1d43-47d1-a460-4705119d8554" width="800" height="600">

- 젠킨스 모니터링
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/245d2074-0d27-49f1-86fd-fd61650cf134" width="800" height="600">

- 엔진엑스 모니터링
<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/2117593c-0f30-4cb2-a00c-a8aec901abf9" width="800" height="600">

## 기타 산출물


#### ERD

<img src="https://github.com/ahjinU/React_Togeball/assets/99533526/5986a15a-8b0f-4cf8-8273-75734e2dd1be" width="1000" height="600">

#### Figma 화면 설계서
<img src="/uploads/5e8cb2e4a208929f44bcd9be87b465ee/figmain.png" width="1000" height="600">


#### 회고

이운재: 좋은 팀원들들 만나 프로젝트 할 수 있어서 좋았습니다. 개인적으로 팀원 덕분에 많은 성장을 했으며,  다음에도 기회가 된다면 같이 프로젝트를 하고 싶습니다. 좋은 경험이였습니다.

오형택: 처음 도전해보는 것들이 많았는데 많은 성장을 했다는 생각이 들면서도 아쉬움도 많이 남는 건 어쩔 수 없는 것 같네요,,
정신없었지만 즐거웠고 보람찼습니다!

윤진아: 좋은 팀원들과 짧은 기간 안에 기획부터 개발까지 경험할 수 있어 좋았습니다. 백엔드와 협업하면서 부족함도 많이 느꼈지만 성장도 많이 할 수 있었던 프로젝트 였습니다.

양유경: 실력있고 열정있는 팀원들과 함께 하게 되어 영광이었습니다! 시간이 더 있었으면 어땠을까 하는 아쉬움도 있지만 많이 성장할 수 있는 좋은 프로젝트 경험이었습니다.

조권호: 훌륭한 팀원들과 함께 프로젝트를 할 수 있어서 많이 성장할 수 있었습니다. 인프라를 구성하면서 발생하는 오류들에 대해 프론트엔드와 백엔드와의 협업이 정말 중요하다고 생각하였고 좋은 경험이었습니다.

조아영: 멋진 팀원분들 덕분에 많은 것을 배우고 성장할 수 있었던 뜻깊고 알찬 시간이었습니다!
