"use client";
//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

//* Components imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//* Utils imports
import { api } from "@/utils/public-api";

//* Hooks imports
import { useLogin, type Login, loginSchema } from "../_hooks";

// const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// type Login = z.infer<typeof loginSchema>;

// const apiResponseSchema = z.object({
//   data: z.string(),
//   path: z.literal("/auth/login"),
// });

// type ApiResponse = z.infer<typeof apiResponseSchema>;

// async function login(data: Login): Promise<ApiResponse | Error> {
//   const response = await api.safePost({
//     url: "/auth/login",
//     body: data,
//     schema: apiResponseSchema,
//   });

//   if (response.success) {
//     return response.data;
//   }

//   throw new Error("Error");
// }

export function Form() {
  const login = useLogin();

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = form.handleSubmit((data: Login) => {
    // const response = await api.post({
    //   url: "/auth/login",
    //   body: data,
    //   schema: z.any(),
    // });

    // console.log(response);

    login.mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 min-w-96">
      <div className="w-full flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input {...form.register("email")} type="email" id="email" />
        <span className="text-red-500 text-sm pt-1">
          {form.formState.errors.email?.message}
        </span>
      </div>

      <div className="w-full flex flex-col">
        <Label htmlFor="password">Password</Label>
        <Input {...form.register("password")} type="password" id="password" />
        <span className="text-red-500 text-sm pt-1">
          {form.formState.errors.password?.message}
        </span>
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
}