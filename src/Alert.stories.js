import Alert from "../src/Alert.svelte";

export default {
  title: "Alert",
  component: Alert,
};

export const Correct = () => ({
  Component: Alert,
  props: {
    variant: "correct",
    message: "You are correct!",
  },
});

export const Wrong = () => ({
  Component: Alert,
  props: {
    variant: "wrong",
    message: "You are wrong!",
  },
});
