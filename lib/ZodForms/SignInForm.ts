import * as z from "zod";
import { FormEvent } from "react";

export const signInForm = z.object({
  username: z.string().trim().min(1, "Please enter username or email"),
  password: z.string().min(1, "Please enter password"),
});
