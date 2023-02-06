package entities

type User struct {
	User_id       int    `gorm:"primaryKey"`
	Email         string `gorm:"unique"`
	Password_hash string
	Phone_number  string `gorm:"unique ;not null"`
	Gender        string
	First_name    string
	Last_name     string
}
