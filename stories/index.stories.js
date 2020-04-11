import { action } from "@storybook/addon-actions";
import Header from "../src/Header.svelte";

export default {
  title: "Header",
  component: Header,
};

export const Text = () => ({
  Component: Header,
  props: { stationName: "Monument" },
  on: { click: action("clicked") },
});

export const Emoji = () => ({
  Component: Header,
  props: {
    text: "😀 😎 👍 💯",
  },
  on: { click: action("clicked") },
});
