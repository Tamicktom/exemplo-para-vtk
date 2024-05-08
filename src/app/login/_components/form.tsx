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

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type Login = z.infer<typeof loginSchema>;

export function Form() {
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = form.handleSubmit(async (data: Login) => {
    const response = await api.post({
      url: "/auth/login",
      body: data,
      schema: z.any(),
    });

    console.log(response);
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