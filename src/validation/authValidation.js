// validations/loginSchema.js
import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email harus berupa teks",
    "string.email": "Format email tidak valid",
    "any.required": "Email wajib diisi",
  }),
  password: Joi.string().min(5).required().messages({
    "string.base": "Password harus berupa teks",
    "string.min": "Password minimal 5 karakter",
    "any.required": "Password wajib diisi",
  }),
});
