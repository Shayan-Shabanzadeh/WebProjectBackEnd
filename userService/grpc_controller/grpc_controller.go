package grpc_controller

import (
	"errors"
	"userService/grpc_models"
	"userService/service"
)





func GetUserById(request *grpc_models.GetUserRequest) (*grpc_models.GetUserReponse, error) {
	id := int(request.UserId)
	user, err := service.Get_user_by_id(id)
	if err != nil {
		return nil, errors.New(err.Error)
	}
	result := &grpc_models.GetUserReponse{
		UserId:      int64(user.User_id),
		Email:       user.Email,
		PhoneNumber: user.Phone_number,
		Geneder:     user.Gender,
		FirstName:   user.First_name,
		LastName:    user.Last_name,
	}

	return result, nil
}
