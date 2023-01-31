package errors

import (
	"time"
)

type Base_error struct {
	Error_type string    `json:"error_type"`
	Error_code int       `json:"error_code"`
	Message    string    `json:"message"`
	Error      string    `json:"error"`
	Time       time.Time `json:"time"`
}

func New_Base_error(error_type Error_type, Error_code int, message string, err error) *Base_error {

	e := new(Base_error)
	e.Error_type = error_type.String()
	e.Message = message
	if err != nil {
		e.Error = err.Error()
	}
	e.Error_code = Error_code
	e.Time = time.Now()

	return e
}
