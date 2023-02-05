package main

import (
	"github.com/gin-gonic/gin"
	"userService/controller"
	"userService/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}

func main() {

	r := gin.Default()
	r.POST("/signup", controller.Signup)
	r.POST("/login", controller.Signin)
	r.POST("/refresh", nil)
	r.Run()
}
