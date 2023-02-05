package errors

type Hashing_password_error struct {
	Error *Base_error `json:"error"`
}

func New_hashing_error(err error) *Hashing_password_error {
	p := new(Hashing_password_error)
	p.Error = New_Base_error(HASHING_PASSWORD_ERROR, 400, "Failed to hash the password", err)
	return p
}
