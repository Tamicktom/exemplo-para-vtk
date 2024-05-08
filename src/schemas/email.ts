//* Libraries imports
import { string } from "zod";

export const emailSchema = string({
  required_error: "O email é obrigatório",
  invalid_type_error: "O email deve ser uma string",
})
  .email({
    message: "O email deve ser válido",
  })
  .max(255, {
    message: "O email deve ter no máximo 255 caracteres",
  });