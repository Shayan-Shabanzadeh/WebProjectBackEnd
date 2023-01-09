package main

import (
	"github.com/gin-gonic/gin"
	"userService/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}

func main() {
	r := gin.Default()
	r.POST("/signup", nil)
	r.POST("/login", nil)
	r.POST("/refresh", nil)
	r.Run()
}
