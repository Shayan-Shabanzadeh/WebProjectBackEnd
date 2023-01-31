package dto

type UserDto struct {
	ID       int    `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
