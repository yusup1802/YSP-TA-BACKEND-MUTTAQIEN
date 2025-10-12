import Joi from "joi";
const createBaseUserSchema = {
  email: Joi.string().email().required().messages({
    "string.empty": "Email tidak boleh kosong",
    "string.base": "Email harus berupa teks",
    "string.email": "Format email tidak valid",
    "any.required": "Email wajib diisi",
  }),
  password: Joi.string().min(5).required().messages({
    "string.empty": "Password tidak boleh kosong",
    "string.base": "Password harus berupa teks",
    "string.min": "Password minimal 5 karakter",
    "any.required": "Password wajib diisi",
  }),
};
const baseProfile = {
  name: Joi.string().min(1).required().messages({
    "any.required": "Nama wajib diisi",
    "string.empty": "Nama tidak boleh kosong",
  }),
  rfidNumb: Joi.string().optional().allow("").messages({
    "string.base": "RFID harus berupa teks",
  }),
};

export const MuridProfile = {
  nis: Joi.number().integer().required().messages({
    "any.required": "NIS wajib diisi",
    "number.base": "NIS harus berupa angka",
  }),
  noMurid: Joi.string().required().messages({
    "any.required": "Nomor murid wajib diisi",
    "string.empty": "Nomor murid tidak boleh kosong",
  }),
  kelasId: Joi.number().integer().required().messages({
    "any.required": "ID Kelas wajib diisi",
    "number.base": "ID Kelas harus berupa angka",
  }),
};
export const GuruProfile = {
  nik: Joi.number().integer().required().messages({
    "any.required": "NIK wajib diisi",
    "number.base": "NIK harus berupa angka",
  }),
  noGuru: Joi.string().required().messages({
    "any.required": "Nomor guru wajib diisi",
    "string.empty": "Nomor guru tidak boleh kosong",
  }),
};

export const createMuridSchema = Joi.object({
  ...createBaseUserSchema,
  ...baseProfile,
  ...MuridProfile,
});

export const createGuruSchema = Joi.object({
  ...createBaseUserSchema,
  ...baseProfile,
  ...GuruProfile,
});
export const createAdminSchema = Joi.object({
  ...createBaseUserSchema,
});

export const createKelasSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    "string.base": "Nama kelas harus berupa teks",
    "string.empty": "Nama kelas tidak boleh kosong",
    "string.min": "Nama kelas minimal 2 karakter",
    "any.required": "Nama kelas wajib diisi",
  }),
  waliKelasId: Joi.number().integer().optional().messages({
    "number.base": "ID wali kelas harus berupa angka",
    "number.integer": "ID wali kelas harus berupa bilangan bulat",
  })
});