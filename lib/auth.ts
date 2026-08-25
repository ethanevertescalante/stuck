import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import {oAuthProxy, username} from "better-auth/plugins";
import {createAuthMiddleware} from "@better-auth/core/api";
import {nextCookies} from "better-auth/next-js";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    hooks: {
        after: createAuthMiddleware(async (ctx) => {
            console.log("Auth Hook Triggered:", ctx.path);
        }),
    },
    plugins: [username(),oAuthProxy(), nextCookies()]
});