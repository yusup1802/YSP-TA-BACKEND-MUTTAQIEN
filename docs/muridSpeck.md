# Muird API Spec

## ambil data murid by id API

Endpoint :

| Data      | Value                          |
| --------- | ------------------------------ |
| Endpoint  | GET /murid/jadwal              |
| Fungsi    | getAllJadwalTugas              |
| Deskripsi | Mengambil seluruh jadwal murid |

Request User :

```json
{
  "id": 1,
  "email": "murid1@gmail.com",
  "role": "MURID",
  "muridProfile": {
    "id": 1,
    "nis": 1,
    "name": "murid1",
    "noMurid": "1",
    "waliMuridToMurid": []
  },
  "guruProfile": null
}
```

---

## ambil data murid by id API

Endpoint :

| Data      | Value                  |
| --------- | ---------------------- |
| Endpoint  | GET /murid/profile/:id |
| Fungsi    | profileMuridId         |
| Deskripsi | Mengambil data murid   |

Request User :

```json
{
  "id": 1,
  "email": "murid1@gmail.com",
  "role": "MURID",
  "muridProfile": {
    "id": 1,
    "nis": 1,
    "name": "murid1",
    "noMurid": "1",
    "waliMuridToMurid": []
  },
  "guruProfile": null
}
```

Response Body Success :

```json
{
  "statusCode": 200,
  "message": "Berhasil mengambil data murid",
  "payload": {
    "user": {
      "userId": 1,
      "email": "murid1@gmail.com",
      "role": "MURID",
      "muridProfile": {
        "muridId": 1,
        "nis": 1,
        "name": "murid1",
        "noMurid": "1",
        "waliMurid": []
      }
    }
  }
}
```

Response Body Error :

#### Jika user atau muridProfile tidak ditemukan

```json
{ "statusCode": 404, "error": "Profil murid tidak ditemukan" }
```

#### Jika gagal authentication

```json
{ "statusCode": 401, "message": "User belum login atau token tidak valid" }
```

#### Jika Data tidak lengkap

```json
{ "statusCode": 400, "error": "Data murid tidak lengkap" }
```

## Progress

### ✅ API Progress Checklist

#### 👤 User (Admin)

- [ ] `GET /murid/jadwal` → `getAllJadwalTugas`
- [x] `GET /murid/profile/:id` → `profileMuridId`
- [ ] `PUT /murid/profile/:id` → `editProfileMuridId`
- [ ] `GET /murid/:muridId/absensi` → `getAbsensiByMuridId`
- [ ] `GET /murid/absensi-user/:userId` → `getAbsensiByUserId`
