package errors

type Token_expired_exception struct {
	Error *Base_error `json:"error"`
}

func New_token_expired_exception(message string, err error) *Token_expired_exception {
	p := new(Token_expired_exception)
	p.Error = New_Base_error(TOKEN_EXPIRED, 403, message, err)
	return p
}
