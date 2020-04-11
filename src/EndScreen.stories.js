import { action } from "@storybook/addon-actions";
import EndScreen from "../src/EndScreen.svelte";

export default {
  title: "EndScreen",
  component: EndScreen,
};

export const Default = () => ({
  Component: EndScreen,
  props: {
    progress: 4,
    goal: 12,
  },
  on: { message: action("clicked") },
});
