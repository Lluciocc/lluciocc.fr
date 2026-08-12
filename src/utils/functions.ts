import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const buildClassName = (classNames: string[]): string => {
	return classNames.filter(Boolean).join(" ");
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
