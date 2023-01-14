package service

import (
	"userService/dto"
	"userService/repository"
)

func AddUser(userDto dto.UserDto) (*dto.UserDto, error) {
	// add validation for user dto.

	_, err := repository.AddUser(userDto)
	if err != nil {
		//TODO error handling
		return nil, err
	}
	return &userDto, nil
}
