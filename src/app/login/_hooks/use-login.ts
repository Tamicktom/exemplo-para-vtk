"use client";
//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import z from "zod";

//* Utils imports
import { emailSchema, passwordSchema } from "@/schemas";
import { api } from "@/utils/public-api";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type Login = z.infer<typeof loginSchema>;

const apiResponseSchema = z.object({
  data: z.string(),
  path: z.literal("/auth/login"),
});

type ApiResponse = z.infer<typeof apiResponseSchema>;

async function login(data: Login): Promise<ApiResponse | Error> {
  const response = await api.safePost({
    url: "/auth/login",
    body: data,
    schema: apiResponseSchema,
  });

  if (response.success) {
    return response.data;
  }

  throw new Error("Error");
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}