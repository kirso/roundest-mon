import { AppRouter } from "@/server/router"

// utils/trpc.ts
import { createReactQueryHooks } from "@trpc/react"

export const trpc = createReactQueryHooks<AppRouter>()
// => { useQuery: ..., useMutation: ...}
