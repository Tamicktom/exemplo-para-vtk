//* Libraries imports
import { string } from "zod";

export const passwordSchema = string({
  required_error: "A senha é obrigatória",
  invalid_type_error: "A senha deve ser uma string",
})
  .min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  })
  .max(100, {
    message: "A senha deve ter no máximo 100 caracteres",
  });