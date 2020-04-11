import { action } from "@storybook/addon-actions";
import Progress from "../src/Progress.svelte";

export default {
  title: "Progress",
  component: Progress,
};

export const Default = () => ({
  Component: Progress,
  props: {
    index: 4,
    goal: 12,
    results: [
      true,
      false,
      false,
      true,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  },
});
