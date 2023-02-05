package controller

import (
	"net/http"
	"os"
	"regexp"
	"time"
	"userService/dto"
	"userService/errors"
	"userService/service"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

func Signup(c *gin.Context) {
	var userDto dto.UserDto
	//validate user
	userDto = *validate_user(c, userDto)
	if &userDto == nil {
		return
	}
	//hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(userDto.Password), 10)

	if err != nil {
		error := errors.New_hashing_error(err).Error
		c.JSON(http.StatusBadRequest, gin.H{
			"result": dto.Create_http_response(error.Error_code, nil, error),
		})

		return
	}

	userDto.Password = string(hash)

	//add user
	_, error := service.AddUser(userDto)

	if error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"result": dto.Create_http_response(error.Error_code, nil, error),
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{})

}

func Signin(c *gin.Context) {

	var userDto dto.UserDto
	userDto = *validate_user(c, userDto)
	if &userDto == nil {
		return
	}
	result, err := service.Get_user_by_email(userDto.Email)
	if err != nil {
		c.JSON(err.Error_code, gin.H{
			"result": dto.Create_http_response(err.Error_code, nil, err),
		})

		return
	}

	error := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(userDto.Password))

	if error != nil {
		c.JSON(400, gin.H{
			"result": dto.Create_http_response(
				400,
				nil,
				errors.New_Invalid_request_error("Invalid email or password", nil).Error),
		})
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": userDto.ID,
		"exp": time.Now().Add(time.Hour).Unix(),
	})
	tokenString, error := token.SignedString([]byte(os.Getenv("SECRET")))

	if error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"result": dto.Create_http_response(
				500,
				nil,
				errors.New_internal_error("Failed to create token", error).Error),
		})

		return
	}
	c.JSON(200, gin.H{
		"result": dto.Create_http_response(
			200,
			map[string]string{"access_token": tokenString},
			nil),
	})
}

func validate_user(c *gin.Context, userDto dto.UserDto) *dto.UserDto {
	//read user from request and validate json
	err := c.Bind(&userDto)
	if err != nil {
		error := errors.New_convert_error(err).Error
		result := dto.Create_http_response(error.Error_code, nil, error)
		c.JSON(http.StatusBadRequest, gin.H{
			"result": result,
		})

		return nil
	}
	//check if email is empty
	if len(userDto.Email) == 0 {
		error := errors.New_Invalid_request_error("Email cannot be empty.", nil).Error
		result := dto.Create_http_response(error.Error_code, nil, error)
		c.JSON(error.Error_code, gin.H{
			"result": result,
		})
		return nil
	}
	//Check email regex
	re := regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

	if !re.MatchString(userDto.Email) {
		error := errors.New_Invalid_request_error("Invalid email address", nil).Error
		result := dto.Create_http_response(error.Error_code, nil, error)
		c.JSON(error.Error_code, gin.H{
			"result": result,
		})
		return nil
	}

	//check if password is empty
	if len(userDto.Password) == 0 {
		error := errors.New_Invalid_request_error("Password cannot be empty", nil).Error
		result := dto.Create_http_response(error.Error_code, nil, error)
		c.JSON(error.Error_code, gin.H{
			"result": result,
		})
		return nil
	}

	return &userDto

}
