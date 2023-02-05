package errors

type Entity_already_exist_error struct {
	Error *Base_error `json:"error"`
}

func New_entity_already_exist_error(message string, err error) *Entity_already_exist_error {
	p := new(Entity_already_exist_error)
	p.Error = New_Base_error(ENTITY_ALREADY_EXISTS, 400, message, err)
	return p
}
