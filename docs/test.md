## Input kehadiran
| Field     | Value                                                                 |
| --------- | --------------------------------------------------------------------- |
| Endpoint  | POST /guru/absensi                                                    |
| Fungsi    | inputKeteranganKehadiranMurid                                         |
| Deskripsi | mencatat kehadiran murid jika tidak hadir maupun RFID tidak dibawa 	  |          


### Request Body
```json
{
	"rfidNumb":"14",
	"tanggal":"2025-07-10T17:00:00.000Z",
	"keterangan":"IZIN",
	"catatan":"Mengikuti lomba antar sekolah"
}
```

### Response Body Success
>kondisi dimana nomor whatsapp valid semua maka failedNumbers hanya array kosong saja
```json
{
	"statusCode": 201,
	"message": "Keterangan absensi berhasil disimpan",
	"payload": {
		"absensi": {
			"id": 49,
			"rfidNumb": "14",
			"keterangan": "IZIN",
			"tanggal": "2025-07-10T17:00:00.000Z",
			"jamHadir": null,
			"jamPulang": null,
			"catatan": "Mengikuti lomba antar sekolah"
		},
		"failedNumbers": []
	}
}
```
>contoh apabila nomor whatsapp tidak valid 
```json
"failedNumbers": [
	{
		"number": "+62812",
		"error": "Nomor tidak valid untuk WhatsApp"
	}
]
```


#### Notifikasi Whatapps
>diterima oleh murid


	Pesan untuk orang tua murid 1 bahwa murid1 tidak hadir pada 11 Juli 2025 karena izin.

	Catatan: Mengikuti lomba antar sekolah


>diterima oleh wali murid
### Response Body Error:

#### Kartu RFID belum terdaftar

```json
{ "statusCode": 404, "error": "Kartu RFID tidak terdaftar atau belum terhubung ke murid" }
```

#### Error server

```json
{  "statusCode": 500, "error": "Server error" }
```

### Error Validasi

| Field      | Pesan Error                                                            |
| ---------- | ---------------------------------------------------------------------- |
| rfidNumb   | RFID harus berupa teks                                                 |
| rfidNumb   | RFID tidak boleh kosong                                                |
| rfidNumb   | RFID wajib diisi                                                       |
| keterangan | Keterangan harus salah satu dari "IZIN", "SAKIT", "ALFA", atau "HADIR" |
| keterangan | Keterangan wajib diisi                                                 |
| tanggal    | Tanggal tidak sesuai (contoh: 2025-07-18T00:00:00.000Z)                |
| tanggal    | Tanggal harus berupa teks                                              |
| tanggal    | Tanggal wajib diisi                                                    |
| tanggal    | Tanggal tidak boleh null                                               |
| tanggal    | Tanggal tidak boleh kosong                                             |
| catatan    | Catatan harus berupa teks                                              |