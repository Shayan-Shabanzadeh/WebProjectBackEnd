package errors

import "fmt"

type Error_type int

const (
	CONVERTION_ERROR Error_type = iota
	USER_NOT_FOUND
	HASHING_PASSWORD_ERROR
	INTERNAL_SERVER_ERROR
	ENTITY_ALREADY_EXISTS
	INVALID_REQUEST
	ENTITY_DOES_NOT_EXIST
)

func (e Error_type) String() string {
	switch e {
	case CONVERTION_ERROR:
		return "CONVERTION_ERROR"
	case HASHING_PASSWORD_ERROR:
		return "HASHING_PASSWORD_ERROR"
	case INTERNAL_SERVER_ERROR:
		return "INTERNAL_SERVER_ERROR"
	case ENTITY_ALREADY_EXISTS:
		return "ENTITY_ALREADY_EXISTS"
	case INVALID_REQUEST:
		return "INVALID_REQUEST"
	case ENTITY_DOES_NOT_EXIST:
		return "ENTITY_DOES_NOT_EXIST"
	default:
		return fmt.Sprintf("%d , UNKNOW ERROR TYPE", int(e))
	}
}
