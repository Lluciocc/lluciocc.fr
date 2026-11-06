interface SocialLink {
	href: string;
	label: string;
	icon: "mail" | "github" | "linkedin";
}

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "mailto:lucas.cialdella57@gmail.com?subject=Hi%20Lluciocc!",
		label: "Email",
		icon: "mail",
	},
	{
		href: "https://github.com/lluciocc",
		label: "GitHub",
		icon: "github",
	},
	{
		href: "https://www.linkedin.com/in/lucas-cialdella",
		label: "LinkedIn",
		icon: "linkedin",
	},
];
