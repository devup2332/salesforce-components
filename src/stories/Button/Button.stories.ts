import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
	title: "Button",
	component: Button,
	tags: ["button"],
	args: {},
};

export default meta;

export const Filled: StoryObj<typeof meta> = {
	args: {
		variant: "filled",
		children: "Click me",
	},
};
