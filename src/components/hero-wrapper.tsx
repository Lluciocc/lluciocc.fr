import confetti from "canvas-confetti";
import type { MouseEvent } from "react";

const defaults = {
	spread: 360,
	ticks: 50,
	gravity: 0,
	decay: 0.94,
	startVelocity: 30,
	colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
};

const celebrate = (event: MouseEvent<HTMLButtonElement>) => {
	const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
	const origin = {
		x: (left + width / 2) / window.innerWidth,
		y: (top + height / 2) / window.innerHeight,
	};

	confetti({
		...defaults,
		origin,
		particleCount: 40,
		scalar: 1.2,
		shapes: ["star"],
	});

	confetti({
		...defaults,
		origin,
		particleCount: 10,
		scalar: 0.75,
		shapes: ["circle"],
	});
};

const HeroWrapper = () => {
	return (
		<section className="hero-wrapper">
			<div className="hero-container">
				<button
					type="button"
					onClick={celebrate}
					aria-label="Celebrate"
					className="cursor-pointer border-0 bg-transparent p-0"
				>
					<img src="/logo.png" alt="Lluciocc" />
				</button>
				<div>
					<h1>Lluciocc</h1>
					<p>Computer Science Student</p>
				</div>
			</div>
		</section>
	);
};

export default HeroWrapper;
