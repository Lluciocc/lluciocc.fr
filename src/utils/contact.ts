export interface SocialLink {
	href: string;
	label: string;
}

export const CONTACT_TEXTS = {
	SECTION_TITLE: "Catch me on your favorite social media",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: "https://github.com/lluciocc",
		label: "Github",
	},
	{
		href: "https://linkedin.com/in/lluciocc",
		label: "Linkedin",
	},
	{
		href: "mailto:lucas.cialdella57@gmail.com?subject=Hi Lluciocc!&body=I'm coming from your website, are you up for a chat?",
		label: "Email",
	},
];

export const LINK_PROPS = {
	target: "_blank",
	rel: "noreferrer",
} as const;
