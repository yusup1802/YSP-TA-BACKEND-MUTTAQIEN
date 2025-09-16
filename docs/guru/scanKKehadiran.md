## Absen kehadiran melalui RFID
| Field     | Value                                                                 |
| --------- | --------------------------------------------------------------------- |
| Endpoint  | POST /absensi                                                    			|
| Fungsi    | inputKeteranganKehadiranMurid                                         |
| Deskripsi | melakukan absensi menggunakan RFID , Dengan cara scan pertama <br /> untuk kehadiran dan scan kedua untuk jam pulang |          


### Request Body
```json 
{ "rfid" : "14"} 
```
### Response Body Success oleh murid
> response json jam hadir / pembacaan RFID pertama
```json 
{
	"statusCode": 201,
	"message": "Jam hadir dicatat.",
	"payload": {
		"user": {
			"id": 1,
			"nis": 1,
			"name": "murid1",
			"noMurid": "11111",
			"kelasId": 1
		},
		"data": {
			"id": 59,
			"rfidNumb": "14",
			"keterangan": "HADIR",
			"tanggal": "2025-07-15T17:00:00.000Z",
			"jamHadir": "2025-07-15T22:13:59.250Z",
			"jamPulang": null,
			"catatan": null
		}
	}
}
```

> response json jam pulang / pembacaan RFID kedua

```json
{
	"statusCode": 200,
	"message": "Jam pulang dicatat.",
	"payload": {
		"user": {
			"id": 1,
			"nis": 1,
			"name": "murid1",
			"noMurid": "11111",
			"kelasId": 1
		},
		"data": {
			"id": 59,
			"rfidNumb": "14",
			"keterangan": "HADIR",
			"tanggal": "2025-07-15T17:00:00.000Z",
			"jamHadir": "2025-07-15T22:13:59.250Z",
			"jamPulang": "2025-07-15T22:38:35.123Z",
			"catatan": null
		}
	}
}
```
### Response Body Success oleh guru
> response json jam hadir / pembacaan RFID pertama
```json
{
	"statusCode": 201,
	"message": "Jam hadir dicatat.",
	"payload": {
		"user": {
			"id": 1,
			"nik": 1,
			"name": "guru1",
			"noGuru": "1"
		},
		"absensi": {
			"id": 63,
			"rfidNumb": "1",
			"keterangan": "HADIR",
			"tanggal": "2025-07-15T17:00:00.000Z",
			"jamHadir": "2025-07-16T14:58:21.016Z",
			"jamPulang": null,
			"catatan": null
		}
	}
}
```
> response json jam pulang / pembacaan RFID kedua
```json
{
	"statusCode": 200,
	"message": "Jam pulang dicatat.",
	"payload": {
		"user": {
			"id": 1,
			"nik": 1,
			"name": "guru1",
			"noGuru": "1"
		},
		"absensi": {
			"id": 63,
			"rfidNumb": "1",
			"keterangan": "HADIR",
			"tanggal": "2025-07-15T17:00:00.000Z",
			"jamHadir": "2025-07-16T14:58:21.016Z",
			"jamPulang": "2025-07-16T14:59:44.604Z",
			"catatan": null
		}
	}
}
```

#### Kartu RFID atau profile belum terdaftar
```json
{
  "statusCode": 404,
  "error": "Kartu RFID tidak terdaftar atau belum terhubung ke murid atau guru"
}
```
#### error server

```json
{
	"statusCode" :500, 
	"error": "Terjadi kesalahan server." 
}
```

### Error Validasi

| Field      | Pesan Error               |
| ---------- | ------------------------- |
| rfid       | RFID harus disertakan.    |
| rfid       | RFID tidak boleh kosong   |
| rfid       | RFID harus berupa teks.   |