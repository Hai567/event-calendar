# Event Calendar
## Instruction
URL: https://event-calendar-back-end.onrender.com
#### Environment Variable (Optional)

Go to https://console.cloud.google.com/apis/credentials and create a new project. Then navigate to "Credentials" tab, click "CREATE CREDENTIALS" and choose "OAuth client ID". After that choose "Web application" for the "Application type". Feel free to enter whatever you want in those sections. However, for the "Authorized redirect URIs", enter "http://localhost:3000/api/user/auth/google/callback".

When all those steps above are done, create a new file named ".env"

```
GOOGLE_CLIENT_ID = Client/ID/VALUE
GOOGLE_CLIENT_SECRET = Client/secret/VALUE
GOOGLE_CALLBACK_URL = http://localhost:3000/api/user/auth/google/callback
SESSION_SECRET = WHAT/EVER/YOU/WANT
```

#### Hooks

```
// [GET] To get all users
https://event-calendar-back-end.onrender.com/api/super-users/all-users
// [POST] To sign in
https://event-calendar-back-end.onrender.com/api/user/auth/sign-in
// [POST] To sign up
https://event-calendar-back-end.onrender.com/api/user/auth/sign-up
// [GET] To sign in using Google
https://event-calendar-back-end.onrender.com/api/user/auth/google
// [GET] To sign out
https://event-calendar-back-end.onrender.com/api/user/auth/logout
```

#### Required sign up form keys:

(It must be typed exactly the same)

```
email (REQUIRED)
fName (REQUIRED)
lName (REQUIRED)
displayName (REQUIRED)
city (REQUIRED)
password (REQUIRED)
avatar (Optional)
```

#### Required sign in form keys:

(It must be typed exactly the same)

```
email (REQUIRED)
password (REQUIRED)
```

## Example (Using Postman)

![get all users example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/get-all-users-example.png?raw=true)
![sign up example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/sign-up-example.png?raw=true)
![sign in example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/sign-in-example.png?raw=true)
