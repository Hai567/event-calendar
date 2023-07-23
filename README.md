# Event Calendar

## Instruction

## BackEnd

To run this, first install MongoDB (https://www.mongodb.com/docs/manual/administration/install-community/), NodeJS (https://nodejs.org/en/download), MongoCompass (Optional) (https://www.mongodb.com/products/compass)

### Start the DB

```
cd ~
mongod
```

### Clone the repo

```
git clone https://github.com/Hai567/event-calendar/tree/BackEnd BE
```

### Navigate to cloned folder

```
cd BE
```

### Install the pakages

```
npm install
```

### Run the programme

```
node app.js
```

### Hooks

```
// [GET] To get all users
http://localhost:3000/api/super-users/all-users
// [POST] To sign in
http://localhost:3000/api/user/auth/sign-in
// [POST] To sign up
http://localhost:3000/api/user/auth/sign-up
```

### Required sign up form keys:

(It must be type exactly the same)

```
email
fName
lName
displayName
city
password
avatar (Optional)
```

### Required sign in form keys:

(It must be type exactly the same)

```
email
password
```

## Example (Using Postman)

![get all users example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/get-all-users-example.png?raw=true)
![sign up example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/sign-up-example.png?raw=true)
![sign in example](https://github.com/Hai567/event-calendar/blob/BackEnd/instruction-imgs/sign-in-example.png?raw=true)
