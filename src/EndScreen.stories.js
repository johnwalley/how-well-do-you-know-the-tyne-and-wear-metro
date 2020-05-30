import { action } from "@storybook/addon-actions";
import EndScreen from "../src/EndScreen.svelte";

export default {
  title: "EndScreen",
  component: EndScreen,
};

export const Poor = () => ({
  Component: EndScreen,
  props: {
    progress: 4,
    goal: 12,
  },
  on: { message: action("clicked") },
});

export const Good = () => ({
  Component: EndScreen,
  props: {
    progress: 8,
    goal: 12,
  },
  on: { message: action("clicked") },
});

export const Perfect = () => ({
  Component: EndScreen,
  props: {
    progress: 12,
    goal: 12,
  },
  on: { message: action("clicked") },
});
