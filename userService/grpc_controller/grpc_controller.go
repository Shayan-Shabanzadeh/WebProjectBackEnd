package grpc_controller

import (

	"userService/grpc_models"
	"userService/util"
)

func ValidateJwt(request *grpc_models.JwtIsValidRequest) (*grpc_models.JwtIsValidResponse, error) {
	token := request.JwtToken
	isValid, _ := util.ValidateToken(token)
	result := &grpc_models.JwtIsValidResponse{
		IsValid: isValid,
	}
	return result, nil
}
