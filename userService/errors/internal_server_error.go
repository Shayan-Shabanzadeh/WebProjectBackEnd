package errors

type Internal_server_error struct {
	Error *Base_error `json:"error"`
}

func New_internal_error(message string, err error) *Internal_server_error {
	p := new(Internal_server_error)
	p.Error = New_Base_error(INTERNAL_SERVER_ERROR, 500, message, err)
	return p
}
