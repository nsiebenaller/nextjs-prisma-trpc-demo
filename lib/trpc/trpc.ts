import * as trpc from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import userRouter from "./routers/user.router";

export const prisma = new PrismaClient();

export const appRouter = trpc.router().merge("user.", userRouter);
export type AppRouter = typeof appRouter;
