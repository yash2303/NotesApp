## NotesApp setup
```npm install```
### Run NotesApp
```node server.js```


## What is the project?

A web application that keeps a record of users' notes.

## Features:

1. User account registration:
   Creates a user account. These credentials will be used to log into this panel.
```
[POST] /app/user

Request Data: {
    'username': str,
    'password': str
}

Response Data: {
    'status': 'account created'
}
```

2. User account login:
Provides the ability to log into the panel using the user credentials.
```
[POST] /app/user/auth

Request Data: {
    'username': str,
    'password': str
}

Response Data: {
    'status': 'success',
    'userId': int
}
```

3. List Saved Notes:
Provides list of stored notes for the logged-in user
```
[GET] /app/sites/list/?user={userId}

Request Data: None
Response Data: [List of saved notes]
```
The list returned belongs to the userId passed with the request

4. Save a new note:
Provides the ability for users to add a new note.
```
[POST] /app/sites?user={userId}

Request Data: {
    'note': str,
}

Response Data: {
    'status': 'success'
}

```

## Tech Stack:

* Web-server:  NodeJS Express
* Database: MySQL
