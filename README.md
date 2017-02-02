# Suggest-us
API used to vote for a subject to present in future presentation

## Installation

```sh
$ npm install
```

## Run in dev

```sh
$ npm start
```

## Run in prod

```sh
$ npm run start:prod
```

## API

For all endpoints add the header
> Content-Type: application/json

### Login

Login with an existing user

url
> POST api/auth/login

params
> {"username": "admin", "password": "admin"}

response success
> {"user": {"id": 1, "username": "admin"}, "token": ""}

response error
> {"error": "error desc"}

### Join

Create a new account and login

url
> POST api/auth/join

params
> {"username": "newuser", "password": "newuser"}

response success
> {"user": {"id": 2, "username": "newuser"}, "token": ""}

response error
> {"error": "error desc"}
