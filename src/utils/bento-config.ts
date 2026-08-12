// Define the bento layout order and size

export type BentoSize =
	| "small"
	| "medium"
	| "large"
	| "smallWide";

export const BENTO_LAYOUT_ORDER = [
	{ id: "vish", size: "large" as BentoSize },
	{ id: "shapebound", size: "small" as BentoSize },
	{ id: "sspm", size: "smallWide" as BentoSize },
	{ id: "connex", size: "small" as BentoSize },
	{ id: "groovia", size: "medium" as BentoSize },
	{ id: "acu", size: "small" as BentoSize },
	{ id: "lodify", size: "small" as BentoSize },
	{ id: "repo", size: "smallWide" as BentoSize },
	{ id: "spc", size: "smallWide" as BentoSize },
	{ id: "bos", size: "medium" as BentoSize },
	{ id: "gol", size: "small" as BentoSize },
];

export const BENTO_GRID_CLASSES =
	"grid auto-rows-[128px] gap-5 sm:grid-cols-4 grid-cols-1";
