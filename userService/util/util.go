package util

import (
	"os"
	"time"
	"userService/errors"

	"github.com/golang-jwt/jwt"
)

func ExtractToken(tokenStr string) (jwt.MapClaims, error) {

	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET")), nil
	})
	if err != nil {
		return nil, err
	}
	claims := token.Claims.(jwt.MapClaims)
	return claims, nil
}

func ValidateToken(tokenStr string) (bool, string) {
	claims, err := ExtractToken(tokenStr)
	if err != nil {
		return false , err.Error()
	}
	exp := int64(claims["exp"].(float64))
	if exp < time.Now().Unix() {
		return false, errors.New_token_expired_exception("token is expired", nil).Error.Message
	}
	return true, ""
}
