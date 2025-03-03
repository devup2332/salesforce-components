import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | boolean | undefined)[]): string => {
	return twMerge(classes.filter(Boolean) as string[]);
};
