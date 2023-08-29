# Use the official Golang image as a parent image
FROM golang:1.16.5-stretch

# Set the working directory in the Docker image
WORKDIR /app

# Copy the server code and the go.mod file into the Docker image
COPY main.go go.mod ./

# Build the Go app
RUN go build -o main .

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the server when the Docker container starts
CMD ["/app/main"]
