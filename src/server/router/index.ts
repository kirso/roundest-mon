import * as trpc from "@trpc/server"
import { resolve } from "path"
import { z } from "zod"

import { PokemonClient } from "pokenode-ts"

export const appRouter = trpc.router().query("get-pokemon-by-id", {
	input: z.object({ id: z.number() }),
	async resolve({ input }) {
		const api = new PokemonClient()
		return input.id
	}
})

// export type definition of API
export type AppRouter = typeof appRouter
