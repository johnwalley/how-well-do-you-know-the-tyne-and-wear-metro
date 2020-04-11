import { action } from "@storybook/addon-actions";
import Header from "../src/Header.svelte";

export default {
  title: "Header",
  component: Header,
};

export const Default = () => ({
  Component: Header,
  props: { stationName: "Monument", progress: 2, index: 3 },
});
