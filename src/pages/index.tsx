import type { NextPage } from "next"
import { trpc } from "@/utils/trpc"
import { getOptionsForVote } from "@/utils/getRandomPokemon"
import { useState } from "react"

const btn = "bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 p-2 rounded"

const Home: NextPage = () => {
	const [ids, updateIds] = useState(() => getOptionsForVote())

	const [first, second] = ids

	const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }])
	const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }])

	if (firstPokemon.isLoading || secondPokemon.isLoading) return null

	const voteForRoundest = (selected: number) => {
		//todo: fire mutation to persist changes to
		updateIds(getOptionsForVote())
	}

	console.log(firstPokemon)
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<div className=" text-2xl text-center">Which Pokémon is rounder? </div>
			<div className="p-2" />
			<div className="border rounded p-12 flex justify-between max-w-2xl">
				<div className="w-64 h-64 flex flex-col items-center">
					<img
						src={firstPokemon.data?.sprites.front_default}
						className="w-full"
					/>
					<div className="text-xl text-center uppercase mt-[-1rem]">
						{firstPokemon.data?.name}
					</div>
					<button className={btn} onClick={() => voteForRoundest(first)}>
						Rounder
					</button>
				</div>
				<div className="p-8">VS</div>
				<div className="w-64 h-64 flex flex-col items-center">
					<img
						src={secondPokemon.data?.sprites.front_default}
						className="w-full"
					/>
					<div className="text-xl text-center uppercase mt-[-1rem]">
						{secondPokemon.data?.name}
					</div>
					<button className={btn} onClick={() => voteForRoundest(first)}>
						Rounder
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
