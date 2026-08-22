import { createAuthClient } from "better-auth/react"
const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})

export const { useSession } = authClient
export const { signIn } = authClient
export const { signUp } = authClient
export const { signOut } = authClient
