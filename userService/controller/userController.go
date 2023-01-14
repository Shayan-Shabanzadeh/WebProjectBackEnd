package controller

import (
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"userService/dto"
	"userService/service"
	"github.com/gin-gonic/gin"
)

func Signup(c *gin.Context) {
	var userDto dto.UserDto
	if c.Bind(&userDto) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Faild to read body",
		})

		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(userDto.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Faild to hash passsword",
		})

		return
	}

	userDto.Password = string(hash)
	err = nil
	_, err = service.AddUser(userDto)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to create user",
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{})

}
