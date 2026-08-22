import * as z from 'zod';

export const signUpForm = z.object({
    username: z.string()
        .trim()
        .min(1, "Please enter username"),
    email: z.email()
        .min(1, "Please enter valid email"),
    password: z.string()
        .min(1, "Please enter password"),
    confirmPassword: z.string()
        .min(1, "Please confirm your password"),
})