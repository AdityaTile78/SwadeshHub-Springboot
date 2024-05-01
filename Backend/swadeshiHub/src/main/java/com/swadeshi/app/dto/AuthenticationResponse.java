package com.swadeshi.app.dto;

public record AuthenticationResponse(Long Id,String username,String jwtToken,int role,long sellerid) {

}
