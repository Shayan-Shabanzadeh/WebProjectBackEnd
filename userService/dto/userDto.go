package dto

type UserDto struct {
	User_id       int    `json:"user_id"`
	Email         string `json:"email"`
	Password_hash string `json:"password_hash"`
	Phone_number  string `json:"phone_number"`
	Gender        string `json:"gender"`
	First_name    string `json:"first_name"`
	Last_name     string `json:"last_name"`
}
