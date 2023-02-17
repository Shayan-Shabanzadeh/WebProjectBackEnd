FROM golang:1.19-alpine
WORKDIR /usr/src/goapp/userService
COPY go.mod ./
COPY . .
RUN go mod tidy
RUN go build -o /docker-go
CMD [ "/docker-go" ]