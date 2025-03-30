import type { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";
import Tags from "../Tags";

export default {
  title: "Components/Tags",
  component: Tags,
} satisfies Meta<typeof Tags>;

type Story = StoryObj<typeof Tags>;

export const Single: Story = {
  args: {
    Tags: { Title: "Tag", Value: 1 },
    onClick: fn((value: string | number) =>
      alert(`Tag clicked with value: ${value}`),
    ),
  },
};

export const Multiple: Story = {
  args: {
    Tags: [
      { Title: "Tag 1", Value: 1 },
      { Title: "Tag 2", Value: 2 },
      { Title: "Tag 3", Value: 3 },
      { Title: "Tag 4", Value: 4 },
      { Title: "Tag 5", Value: 5 },
      { Title: "Tag 6", Value: 6 },
    ],
    onClick: fn((value: string | number) =>
      alert(`Tag clicked with value: ${value}`),
    ),
  },
};
