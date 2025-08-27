✅ 1. type – Tipe tugas wajib diisi

```json
[
  {
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 2. type – Tipe tugas harus optionsDate atau dateRange

```json
[
  {
    "type": "invalidType",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 3. type – Tipe tugas harus berupa teks

```json
[
  {
    "type": 123,
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 4. title – Judul tugas wajib diisi

```json
[
  {
    "type": "optionsDate",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 5. title – Judul tugas harus berupa teks

```json
[
  {
    "type": "optionsDate",
    "title": 12345,
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 6. title – Judul tugas minimal 2 karakter

```json
[
  {
    "type": "optionsDate",
    "title": "A",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 7. description – Deskripsi tugas wajib diisi

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "date": ["2025-07-20"]
  }
]
```

✅ 8. description – Deskripsi harus berupa teks

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": 123,
    "date": ["2025-07-20"]
  }
]
```

✅ 9. description – Deskripsi minimal 5 karakter

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "abc",
    "date": ["2025-07-20"]
  }
]
```

✅ 10. date – Tanggal harus diisi untuk tipe optionsDate

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "Ujian akhir"
  }
]
```

✅ 11. date – Tanggal harus diisi untuk tipe dateRange

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir"
  }
]
```

✅ 12. date – Tanggal tidak diperbolehkan untuk tipe yang tidak dikenal

```json
[
  {
    "type": "somethingElse",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": ["2025-07-20"]
  }
]
```

✅ 13. date – Tanggal harus berupa array

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": "2025-07-20"
  }
]
```

✅ 14. date – Minimal harus ada 1 tanggal yang dikirim

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": []
  }
]
```

✅ 15. date – Tanggal harus berisi setidaknya satu tanggal yang valid

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": ["invalid-date"]
  }
]
```

✅ 16. date – Tanggal tidak boleh null

```json
[
  {
    "type": "optionsDate",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": null
  }
]
```

✅ 17. date.from – Format tidak sesuai (bukan ISO string)

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "13/07/2025", "to": "2025-07-18T00:00:00.000Z" }
  }
]
```

✅ 18. date.from – Tidak boleh kosong

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "", "to": "2025-07-18T00:00:00.000Z" }
  }
]
```

✅ 19. date.from – Wajib diisi

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "to": "2025-07-18T00:00:00.000Z" }
  }
]
```

✅ 20. date.from – Harus berupa teks

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": 12345, "to": "2025-07-18T00:00:00.000Z" }
  }
]
```

✅ 21. date.from – Tidak boleh null

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": null, "to": "2025-07-18T00:00:00.000Z" }
  }
]
```

✅ 22. date.to – Format tidak sesuai

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "2025-07-13T00:00:00.000Z", "to": "13-07-2025" }
  }
]
```

✅ 23. date.to – Tidak boleh kosong

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "2025-07-13T00:00:00.000Z", "to": "" }
  }
]
```

✅ 24. date.to – Wajib diisi

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "2025-07-13T00:00:00.000Z" }
  }
]
```

✅ 25. date.to – Harus berupa teks

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "2025-07-13T00:00:00.000Z", "to": 12345 }
  }
]
```

✅ 26. date.to – Tidak boleh null

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": { "from": "2025-07-13T00:00:00.000Z", "to": null }
  }
]
```

✅ 27. date (dateRange) – Rentang tanggal harus berupa objek

```json
[
  {
    "type": "dateRange",
    "title": "Ujian",
    "description": "Ujian akhir",
    "date": "not-object"
  }
]
```

✅ 28. root array – Minimal harus ada 1 tugas yang dikirim

```json
[]
```

✅ 29. root array – Format data harus berupa array tugas

```json
{}
```
