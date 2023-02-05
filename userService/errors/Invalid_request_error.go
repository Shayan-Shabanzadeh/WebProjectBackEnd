package errors

type Invalid_request_error struct {
	Error *Base_error `json:"error"`
}

func New_Invalid_request_error(message string, err error) *Invalid_request_error {
	p := new(Invalid_request_error)
	p.Error = New_Base_error(INVALID_REQUEST, 400, message, err)
	return p
}
