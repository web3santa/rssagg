FROM golang:1.22.2-alpine3.19

WORKDIR /app

COPY . .

# Download and install dependencies
RUN go get -d -v ./...

# Build the go app
RUN go build -o rssagg .

EXPOSE 8000

CMD [ "./rssagg" ]