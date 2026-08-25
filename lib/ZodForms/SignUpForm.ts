import * as z from 'zod';

export const signUpForm = z.object({
    username: z.string()
        .trim()
        .min(1, "Please enter username"),
    email: z.email({
        error: "Please enter email",
    })
        .min(1 ),
    password: z.string()
        .min(1, "Please enter password"),
    confirmPassword: z.string()
        .min(1, "Please confirm your password"),
})