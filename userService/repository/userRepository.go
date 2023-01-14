package repository

import (
	"userService/dto"
	"userService/entities"
	"userService/initializers"
)

func AddUser(userDto dto.UserDto) (*dto.UserDto, error) {
	var userEntity entities.User
	initializers.Mapper.Map(&userEntity, userDto)
	result := initializers.DB.Create(&userEntity)
	err := result.Error

	if err != nil {
		//TODO log error
		//TODO raise custom error
		return nil, err
	}
	return &userDto, nil
}
