import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@/lib/trpc";

export const trpc = createReactQueryHooks<AppRouter>();
