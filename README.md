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

### Auth

|Action|Verb|Url|Params|Success|Error|
|-----|----|-----------|-------|-------|-------|
|login|POST|/api/auth/login|{"username": "admin", "password": "admin"}|{"user": {"id": 1, "username": "admin"}, "token": ""}|{"error": "error desc"}|
|join|POST|/api/auth/join|{"username": "newuser", "password": "newuser"}|{"user": {"id": 2, "username": "newuser"}, "token": ""}|{"error": "error desc"}|


### Subjects
structure
> { "id" => integer, "name" => string }

|Action|Verb|Url|Params|Success|Error|
|-----|----|-----------|-------|-------|-------|
|get all|GET|/api/subjects|{}|[{}, {}, ...]|{"error": "error desc"}|


### Votes

structure
> { "userId" => integer, "subjectId" => integer, "date" => date }

|Action|Verb|Url|Params|Success|Error|
|-----|----|-----------|-------|-------|-------|
|get all|GET|/api/votes|{}|[{}, {}, ...]|{"error": "error desc"}|
|synthesize|GET|/api/synthesize|{}|[{vote, subject, user}, ...]|{"error": "error desc"}|
