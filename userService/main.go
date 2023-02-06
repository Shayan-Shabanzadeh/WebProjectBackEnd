package main

import (
	"github.com/gin-gonic/gin"
	"userService/controller"
	"userService/grpc_init"
	"userService/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
	go grpc_init.StartGrpcServer()
}

func main() {
	r := gin.Default()
	r.POST("auth/signup", controller.Signup)
	r.POST("auth/login", controller.Signin)
	r.POST("auth/refresh", controller.RefreshAccessToken)
	r.POST("/auth/logout", controller.Logout)
	r.Run()

}
