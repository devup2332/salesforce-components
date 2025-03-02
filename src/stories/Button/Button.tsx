import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, ReactNode } from "react";

const variants = cva("px-4 py-2 rounded-md", {
	variants: {
		variant: {
			filled: "bg-blue-500 text-white px-4",
			outlined: "border border-blue-500 text-blue-500",
		},
	},
	defaultVariants: {
		variant: "filled",
	},
});

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
