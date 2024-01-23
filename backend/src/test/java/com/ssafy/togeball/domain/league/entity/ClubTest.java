package com.ssafy.togeball.domain.league.entity;

import org.junit.jupiter.api.Test;

public class ClubTest {

    @Test
    void clubBuilderTest() {

        //Given
        String sponsorName = "LG";
        String clubName = "트윈스";
        String logo = "logo.png";
        byte ranking = 1;

        //When
        Club club = Club.builder()
                .sponsorName(sponsorName)
                .clubName(clubName)
                .logo(logo)
                .ranking(ranking)
                .build();

        //Then
        System.out.println(club.toString());
    }
}
