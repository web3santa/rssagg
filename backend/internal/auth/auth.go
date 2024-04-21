package auth

import (
	"errors"
	"net/http"
	"strings"
)

// Custom error types
var (
	ErrNoAuthInfo     = errors.New("authorization header is missing")
	ErrMalformedAuth  = errors.New("malformed auth header")
	ErrMalformedFirst = errors.New("malformed first part of auth header")
)

// GetAPIKey extracts an API Key from
// the headers of an HTTP request
// Example:
// Authorization:  ApiKey {insert apikey here}
func GetAPIKey(headers http.Header) (string, error) {
	val := headers.Get("Authorization")
	if val == "" {
		return "", ErrNoAuthInfo
	}

	vals := strings.Split(val, " ")
	if len(vals) != 2 {
		return "", ErrMalformedAuth
	}

	if vals[0] != "ApiKey" {
		return "", ErrMalformedFirst
	}

	return vals[1], nil
}
