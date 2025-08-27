import Joi from "joi";

export const absensiByRfidSchema = Joi.object({
  rfid: Joi.string().required().messages({
    "any.required": "RFID harus disertakan.",
    "string.empty": "RFID tidak boleh kosong.",
    "string.base": "RFID harus berupa teks.",
  }),
});
