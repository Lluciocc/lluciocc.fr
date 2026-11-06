import { SOCIAL_LINKS } from "@/utils/contact";

const iconPaths = {
	mail: "M4 5h16v14H4z M4 6l8 6 8-6",
	github:
		"M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
};

const ContactSection = () => (
	<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
		{SOCIAL_LINKS.map((link) => (
			<a
				key={link.icon}
				href={link.href}
				target={link.icon === "mail" ? undefined : "_blank"}
				rel={link.icon === "mail" ? undefined : "noreferrer"}
				aria-label={link.label}
				title={link.label}
				className="flex min-h-11 items-center gap-2 rounded-sm text-sm text-zinc-400 transition-colors hover:text-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 motion-reduce:transition-none"
			>
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="size-5 shrink-0"
				>
					{link.icon === "linkedin" ? (
						<>
							<circle cx="4" cy="4" r="2" />
							<rect x="2" y="9" width="4" height="12" />
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1a6 6 0 0 1 2-2Z" />
						</>
					) : (
						<path d={iconPaths[link.icon]} />
					)}
				</svg>
				<span>{link.label}</span>
			</a>
		))}
	</div>
);

export default ContactSection;
