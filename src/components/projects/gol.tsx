import { GameOfLife } from "@/components/shared/GameOfLife";

const gol = () => {
	return (
		<GameOfLife
			colors={["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"]}
			className="bg-zinc-950"
			startOnClick
		/>
	);
};

export default gol;
