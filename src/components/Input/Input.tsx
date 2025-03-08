import { cn } from "@/utils/cn";
import React, { ComponentProps, JSX } from "react";

interface InputProps extends ComponentProps<"input"> {
	Icon?: JSX.Element;
}

const Input: React.FC<InputProps> = ({ Icon, disabled, ...props }) => {
	return (
		<div
			className={cn(
				"border-stroke-1 border-1 py-2 px-4 rounded-md group w-md flex",
				disabled && "cursor-not-allowed",
			)}
		>
			<input
				type="text"
				className="placeholder:text-text-2 block w-full border-none text-sm outline-none disabled:cursor-not-allowed"
				disabled={disabled}
				{...props}
			/>
			{Icon && Icon}
		</div>
	);
};

export default Input;
