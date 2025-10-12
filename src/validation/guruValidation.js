import Joi from "joi";

const strictIsoDate = Joi.string()
  .pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
  .trim()
  .invalid(null)
  .required()
  .messages({
    "string.pattern.base":
      "{#label} tidak sesuai (contoh: 2025-07-13T00:00:00.000Z)",//done
    "string.empty": "{#label} tidak boleh kosong",//done
    "any.required": "{#label} wajib diisi",//done
    "string.base": "{#label} harus berupa teks",//done
    "any.invalid": "{#label} tidak boleh null",//done
  });

const baseFields = {
  type: Joi.string().valid("optionsDate", "dateRange").required().messages({
    "any.required": "Tipe tugas wajib diisi",//done
    "any.only": "Tipe tugas harus optionsDate atau dateRange",//done
    "string.base": "Tipe tugas harus berupa teks",//done
  }),

  title: Joi.string().min(2).strict().required().messages({
    "string.min": "Judul tugas minimal 2 karakter",//done
    "any.required": "Judul tugas wajib diisi",//done
    "string.base": "Judul tugas harus berupa teks",//done
  }),

  description: Joi.string().required().min(5).messages({
    "string.min": "description minimal 5 karakter",//done
    "any.required": "Deskripsi tugas wajib diisi",//done
    "string.base": "Deskripsi tugas harus berupa teks",//done
  }),

  date: Joi.when("type", {
    is: "optionsDate",
    then: Joi.array()
      .items(strictIsoDate)
      .invalid(null)
      .min(1)
      .required()
      .label("Tanggal")
      .messages({
        "array.base": "optionsDate harus berupa array",//done
        "array.min": "Minimal harus ada 1 tanggal yang dikirim",//done
        "any.required": "Tanggal harus diisi untuk tipe optionsDate",//done
        "array.includesRequiredUnknowns":
          "Tanggal harus berisi setidaknya satu tanggal yang valid",//done
        "any.invalid": "Tanggal tidak boleh bernilai null",
      }),
    otherwise: Joi.when("type", {
      is: "dateRange",
      then: Joi.object({
        from: strictIsoDate.label("Tanggal mulai"),
        to: strictIsoDate.label("Tanggal akhir"),
      })
        .invalid(null)
        .required()
        .label("Tanggal")
        .messages({
          "object.base": "Rentang tanggal harus berupa objek",//done
          "any.required": "Tanggal harus diisi untuk tipe dateRange",//done
          "any.invalid": "Tanggal tidak boleh bernilai null",//done
        }),
      otherwise: Joi.forbidden().label("Tanggal").messages({
        "any.unknown":
          "Tanggal tidak diperbolehkan untuk tipe yang tidak dikenal",//done
      }),
    }),
  }),
};

export const tambahJadwalSchema = Joi.array()
  .items(Joi.object(baseFields))
  .min(1)
  .messages({
    "array.min": "Minimal harus ada 1 tugas yang dikirim",
    "array.base": "Format data harus berupa array tugas",
  });

export const inputKeteranganKehadiranSchema = Joi.object({
  rfidNumb: Joi.string().trim().required().messages({
    "string.base": "RFID harus berupa teks",
    "string.empty": "RFID tidak boleh kosong",
    "any.required": "RFID wajib diisi",
  }),
  keterangan: Joi.string()
    .valid("IZIN", "SAKIT", "ALFA", "HADIR", "PULANG")
    .required()
    .messages({
      "any.only":
        "Keterangan harus salah satu dari IZIN, SAKIT, ALFA , HADIR , PULANG",
      "any.required": "Keterangan wajib diisi",
    }),
  tanggal: strictIsoDate.label("Tanggal"),
  catatan: Joi.string().allow("").optional().messages({
    "string.base": "Catatan harus berupa teks",
  }),
});
