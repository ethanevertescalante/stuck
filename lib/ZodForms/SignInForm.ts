import * as z from "zod"

const signInForm = z.object({
    username: z.string({
        error: "Please enter username or email",
    })
        .trim()
        .min(1),
    password: z.string({
        error: "Please enter password",
    }).min(1),
})