package dto

import (
	"net/http"
	"userService/errors"
)

type Http_response struct {
	Status      string             `json:"status"`
	Status_code int                `json:"status_code"`
	Data        interface{}        `json:"data`
	Error       *errors.Base_error `json:"error"`
}

func Create_http_response(Status_code int, Data interface{}, Error *errors.Base_error) *Http_response {
	r := new(Http_response)
	r.Status_code = Status_code
	r.Status = http.StatusText(Status_code)
	r.Data = Data
	r.Error = Error
	return r
}
