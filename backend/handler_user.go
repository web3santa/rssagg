package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/web3santa/rssagg/database"
)

func (apiCfg *apiConfig) handlerCreateUser(w http.ResponseWriter, r *http.Request) {
	type parameters struct {
		Name string `json:"name"`
	}

	decoder := json.NewDecoder(r.Body)
	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("Error parsing JSON..%v:", err))
		return
	}
	user, err := apiCfg.DB.CreatedUser(r.Context(), database.CreatedUserParams{
		ID:        uuid.New(),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		Name:      params.Name,
	})
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("Couldnt create user::%v", err))
		return
	}

	respondWithJSON(w, http.StatusOK, databaseUserToUser(user))
}
