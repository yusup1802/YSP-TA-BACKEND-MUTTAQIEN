import Joi from "joi";

export const editProfileMuridSchema = Joi.object({
  muridProfile: Joi.object({
    name: Joi.string().min(3).required().messages({
      "string.empty": "Nama murid tidak boleh kosong",
       "string.base": "Nama murid harus berupa teks",
      "string.min": "Nama murid minimal 3 karakter",
      "any.required": "Nama murid wajib diisi",
    }),

    noMurid: Joi.string().trim().min(5).required().messages({
      "string.base": "Nomor murid harus berupa teks",
      "string.empty": "Nomor murid tidak boleh kosong",
      "string.min": "Nomor murid minimal 5 karakter",
      "any.required": "Nomor murid wajib diisi",
    }),

    waliMurids: Joi.array()
      .items(
        Joi.object({
          id: Joi.number().optional(),
          nameWaliMurid: Joi.string().min(3).required().messages({
            "string.empty": "Nama wali murid tidak boleh kosong",
            "string.min": "Nama wali murid minimal 3 karakter",
            "any.required": "Nama wali murid wajib diisi",
          }),

          noWaliMurid: Joi.string()
            .required()
            .messages({
              "string.empty": "Nomor wali murid tidak boleh kosong",
              "any.required": "Nomor wali murid wajib diisi",
            }),
        })
      )
      .optional()
      .messages({
        "array.base": "Format wali murid harus berupa array",
      }),
  })
    .required()
    .messages({
      "any.required": "Data murid wajib diisi",
    }),
});
