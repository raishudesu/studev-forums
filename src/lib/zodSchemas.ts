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

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(3, { message: "Username should be atleast 3 characters long" })
      .max(50, { message: "Username should be less than 50 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email" }),
    // isAdmin: z.boolean({ required_error: "isAdmin property is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password should be at least 6 characters long" }),
    confirmPassword: z
      .string({ required_error: "Confirm your password" })
      .min(6, { message: "Passwords do not match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const signinSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password should be at least 6 characters long" }),
});
