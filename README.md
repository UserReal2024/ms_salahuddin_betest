# ms_salahuddin_betest

### generate jwt
```
curl --location 'https://ms-salahuddin-betest.vercel.app/api/auth/jwt' \
--data ''
```


### create user
```
curl --location 'https://ms-salahuddin-betest.vercel.app/api/user' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTIzMjk5NjksImV4cCI6MTcxMjMzMzU2OX0.79i-DpZz2j75EOkxqVlD4OLMoFtI-YoVMHraeeeOoog' \
--header 'Content-Type: application/json' \
--data '{
    "username" :"username",
    "accountNumber" : "accountNumber",
    "emailAddress" : "emailAddress",
    "identityNumber" :"identityNumber"
}'
```

### get user
```
curl --location --request GET 'https://ms-salahuddin-betest.vercel.app/api/user/6610166755643aecd32a929a' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTIzMjk5NjksImV4cCI6MTcxMjMzMzU2OX0.79i-DpZz2j75EOkxqVlD4OLMoFtI-YoVMHraeeeOoog' \
--header 'Content-Type: application/json' \
--data ''
```

### update user
```
curl --location --request GET 'https://ms-salahuddin-betest.vercel.app/api/user/6610166755643aecd32a929a' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTIzMjk5NjksImV4cCI6MTcxMjMzMzU2OX0.79i-DpZz2j75EOkxqVlD4OLMoFtI-YoVMHraeeeOoog' \
--header 'Content-Type: application/json' \
--data '{
    "username" :"usernamedasdas",
    "accountNumber" : "accountNumber",
    "emailAddress" : "emailAddress",
    "identityNumber" :"identityNumber"
}'
```

### delete user
```
curl --location --request DELETE 'https://ms-salahuddin-betest.vercel.app/api/user/6610166755643aecd32a929a' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTIzMjk5NjksImV4cCI6MTcxMjMzMzU2OX0.79i-DpZz2j75EOkxqVlD4OLMoFtI-YoVMHraeeeOoog' \
--data ''
```