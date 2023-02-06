package service

import (
	"fmt"
	"userService/dto"
	"userService/errors"
	"userService/repository"
)

func AddUser(userDto dto.UserDto) (*dto.UserDto, *errors.Base_error) {

	//check if user already exists
	user, error := repository.FindUserByEmail(userDto.Email)
	if error != nil {
		return nil, error
	}
	if user != nil {
		return nil, errors.New_entity_already_exist_error(
			fmt.Sprintf("user with email : %v , is already added.", userDto.Email),
			nil).Error
	}
	// add user to db
	_, err := repository.AddUser(userDto)
	if err != nil {
		//TODO log error
		return nil, err
	}

	return &userDto, nil
}

func Get_user_by_email(email string) (*dto.UserDto, *errors.Base_error) {
	//check if user already exists
	user, error := repository.FindUserByEmail(email)
	if error != nil {
		return nil, error
	}
	if user == nil {
		return nil, errors.New_entity_does_not_exist_error(
			fmt.Sprintf("user with email : %v , is not found.", email),
			nil).Error
	}

	return user, nil
}

func Get_user_by_id(id int) (*dto.UserDto, *errors.Base_error) {
	user, error := repository.FindUserById(id)
	if error != nil {
		return nil, error
	}
	if user == nil {
		return nil, errors.New_entity_does_not_exist_error(
			fmt.Sprintf("user with id : %v , is not found.", id),
			nil).Error
	}

	return user, nil
}
