import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1, {
        message: "Email is required",
    }).email(),
    password: z.string().min(1, {
        message: "password is required",
    }),
});