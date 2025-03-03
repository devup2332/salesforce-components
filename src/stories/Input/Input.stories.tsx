import Input from "@/components/Input/Input";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
	title: "Input",
	component: Input,
	tags: ["input"],
	argTypes: {
		placeholder: {
			control: { type: "text" },
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Text: Story = {
	args: {
		placeholder: "Type something",
		disabled: false,
	},
};
