# suggest-us
API used to vote for a subject to present in future presentation

## Run in dev

>npm start

## Run in prod

>npm run start:prod

## API

Desc | URL | HTTP verb | args | response | error
------------ | ------------- | -------------
login with an existing user | /api/auth/login | POST | {"username": "admin", "password": "admin"} | {"user": {"id": 1, "username": "admin"}, "token": ""} | {"error": "error desc"}
login with new user | /api/auth/join | POST | {"username": "admin", "password": "admin"} | {"user": {"id": 1, "username": "admin"}, "token": ""} | {"error": "error desc"}
