package grpc_init

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
	"userService/grpc_controller"
	"userService/grpc_models"
)

type GrpcAuthService struct {
	grpc_models.UnimplementedGprcAuthServiceServer
}

func (s GrpcAuthService) JwtIsValid(c context.Context, req *grpc_models.JwtIsValidRequest) (*grpc_models.JwtIsValidResponse, error) {
	result, err := grpc_controller.ValidateJwt(req)
	if err != nil {
		return nil, err
	}
	return result, nil
}

func StartGrpcServer() {
	fmt.Print("Starting Grpc Server...")
	PORT := os.Getenv("GRPC_PORT")
	lis, err := net.Listen("tcp", ":"+PORT)
	if err != nil {
		log.Fatal("Failed to run grpc server.")
	}
	server := grpc.NewServer()
	service := &GrpcAuthService{}
	grpc_models.RegisterGprcAuthServiceServer(server, service)
	fmt.Printf("\nGrpc server started at port : %s \n", PORT)
	err = server.Serve(lis)
	if err != nil {
		log.Fatal("Failed to start grpc server")
	}
}
