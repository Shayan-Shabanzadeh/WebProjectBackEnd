package errors

type Entit_does_not_exist struct {
	Error *Base_error `json:"error"`
}

func New_entity_does_not_exist_error(message string, err error) *Entit_does_not_exist {
	p := new(Entit_does_not_exist)
	p.Error = New_Base_error(ENTITY_DOES_NOT_EXIST, 400, message, err)
	return p
}
