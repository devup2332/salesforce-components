import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ReactNode } from "react";

const variants = cva(
	"px-4 py-2 rounded-md block w-fit cursor-pointer transition-colors",
	{
		variants: {
			variant: {
				filled: "bg-primary-color text-white px-4 hover:bg-hover-1",
				outlined: "border border-stroke-1 text-text-1 hover:bg-hover-2",
			},
		},
		defaultVariants: {
			variant: "filled",
		},
	},
);

interface ButtonProps
	extends ComponentProps<"button">,
		VariantProps<typeof variants> {
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
	return (
		<button className={variants({ variant })} {...props}>
			{children}
		</button>
	);
};

export default Button;
