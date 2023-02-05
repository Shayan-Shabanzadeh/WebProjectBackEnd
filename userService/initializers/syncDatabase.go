package initializers

import "userService/entities"

func SyncDatabase() {
	DB.AutoMigrate(&entities.User{})
}
