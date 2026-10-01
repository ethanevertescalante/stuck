import {createAuthClient} from "better-auth/react";
import {usernameClient} from "better-auth/client/plugins";

const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [usernameClient()],
});

export const {useSession} = authClient;
export const {signIn} = authClient;
export const {signUp} = authClient;
export const {signOut} = authClient;
export const {isUsernameAvailable} = authClient;
