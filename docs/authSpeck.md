# Auth API Spec

## Login API
Endpoint : POST /login

Request Body :
```json
{
  "email": "Example@gmail.com",
  "password": "passwordExample"
}
```
Response Body Success :

```json
{
  "statusCode":"200",
  "message": "Login berhasil",
  "payload":{
    "accessToken": "String JWT",
    "refreshToken": "String JWT",
    "user": {
      "id": 1,
      "email": "Example@gmail.com",
      "role": "ADMIN | GURU | MURID"
    }
  }
}
```
Response Body Error :

```json
{ "error": "Invalid email or password" }
```
Error Validasi :

| Field    | Pesan Error                 |
| -------- | --------------------------- |
| email    | Email harus berupa teks     |
| email    | Format email tidak valid    |
| email    | Email wajib diisi           |
| password | Password harus berupa teks  |
| password | Password minimal 5 karakter |
| password | Password wajib diisi        |
