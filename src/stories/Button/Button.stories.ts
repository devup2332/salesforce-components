import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/Button";

const meta: Meta = {
	title: "Button",
	component: Button,
	tags: ["button"],
	argTypes: {
		variant: {
			options: ["filled", "outlined"],
			control: { type: "select" },
		},
	},
	args: {},
};

export default meta;

export const Filled: StoryObj<typeof meta> = {
	args: {
		variant: "filled",
		children: "Click me",
	},
};

export const Outlined: StoryObj<typeof meta> = {
	args: {
		variant: "outlined",
		children: "Click me",
	},
};
