package errors

type Convert_from_json_error struct {
	Error *Base_error `json:"error"`
}

func New_convert_error(err error) *Convert_from_json_error {
	p := new(Convert_from_json_error)
	p.Error = New_Base_error(CONVERTION_ERROR, 400, "Invalid json fromat", err)
	return p
}
