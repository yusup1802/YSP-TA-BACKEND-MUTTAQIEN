"RFID tidak boleh kosong"

```json
{
  "rfidNumb": "",
  "keterangan": "HADIR",
  "tanggal": "2025-07-13T00:00:00.000Z"
}
```

"RFID wajib diisi"

```json
{
  "keterangan": "HADIR",
  "tanggal": "2025-07-13T00:00:00.000Z"
}
```

    "RFID harus berupa teks"

```json
{
  "rfidNumb": 123456,
  "keterangan": "HADIR",
  "tanggal": "2025-07-13T00:00:00.000Z"
}
```

"Keterangan wajib diisi",

```json
{
  "rfidNumb": "123456"
}
```

    "Keterangan harus salah satu dari IZIN, SAKIT, ALFA atau HADIR",

```json
{
  "rfidNumb": "123456",
  "keterangan": "TERLAMBAT"
}
```

    	"Tanggal tidak sesuai (contoh: 2025-07-13T00:00:00.000Z)"

```json
{
  "rfidNumb": "123456",
  "keterangan": "HADIR",
  "tanggal": "13-07-2025"
}
```

    		"Tanggal wajib diisi"

```json
{
  "rfidNumb": "123456",
  "keterangan": "HADIR"
}
```

    "Tanggal tidak boleh null",

```json
{
  "tanggal": null
}
```

    "Tanggal tidak boleh kosong"

```json
{
  "rfidNumb": "123456",
  "keterangan": "HADIR",
  "tanggal": ""
}
```

    "Tanggal harus berupa teks"

```json
{
  "rfidNumb": "123456",
  "keterangan": "HADIR",
  "tanggal": 123
}
```

    "Catatan harus berupa teks"

```json
{
  "rfidNumb": "123456",
  "keterangan": "HADIR",
  "tanggal": "2025-07-13T00:00:00.000Z",
  "catatan": 123
}
```


#### Notifikasi Whatapps
>diterima oleh murid

	Pesan untuk orang tua murid 1 bahwa murid1 
	tidak hadir pada 11 Juli 2025 karena izin.

	Catatan: Mengikuti lomba antar sekolah
>Pesan untuk wali murid

	Pesan untuk Bapak walimurid1 bahwa murid1 
	tidak hadir pada 11 Juli 2025 karena izin.

	Catatan: Mengikuti lomba antar sekolah
