import * as trpc from "@trpc/server";
import { prisma } from "@/lib/trpc";
import { z } from "zod";

export default trpc
	.router()
	.query("findAll", { resolve: () => prisma.user.findMany() })
	.query("findById", {
		input: z.number(),
		resolve: ({ input }) => prisma.user.findFirst({ where: { id: input } }),
	})
	.mutation("create", {
		input: z.object({
			firstName: z.string(),
			lastName: z.string(),
		}),
		resolve({ input }) {
			return prisma.user.create({ data: input });
		},
	});
