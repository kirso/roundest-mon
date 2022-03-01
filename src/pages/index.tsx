import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { trpc } from "@/utils/trpc"
import { getOptionsForVote } from "@/utils/getRandomPokemon"
import { useMemo } from "react"

const Home: NextPage = () => {
	const [first, second] = useMemo(() => getOptionsForVote(), [])

	const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }])

	console.log(firstPokemon)
	return (
		<div>
			<div className="h-screen w-screen flex flex-col justify-center items-center">
				<div className=" text-2xl text-center">Which Pokémon is rounder? </div>
				<div className="p-4"></div>
				<div className="border rounded p-8 flex justify-between max-w-2xl">
					<div className="w-16 bg-red-800">{first}</div>
					<div className="p-8">VS</div>
					<div className="w-16 bg-red-800">{second}</div>
				</div>
			</div>
		</div>
	)
}

export default Home
