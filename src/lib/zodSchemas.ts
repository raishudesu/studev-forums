import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username must be less than 25 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .min(3, "Email must be at least 3 characters")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});
