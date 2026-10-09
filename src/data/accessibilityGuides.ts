export type AccessibilityGuide = {
  title: string;
  steps: string[];
};

export const accessibilityGuides: AccessibilityGuide[] = [
  {
    title: "Internet (Wi-Fi)",
    steps: [
      "Open the Wi-Fi settings on your phone, tablet, or laptop.",
      "Select the network named Varanda-Guest.",
      "Enter the password printed on the card next to the router.",
      "If the connection fails, restart the router using the round button on the back, wait one minute, and try again.",
    ],
  },
  {
    title: "Television",
    steps: [
      "Press the power button on the Samsung remote.",
      "Use the source button if the screen stays black, then choose HDMI 1.",
      "Change channels with the number keys or the channel up and down buttons.",
      "To use streaming apps, press Home on the remote and choose the app you need.",
    ],
  },
  {
    title: "Oven",
    steps: [
      "Turn the left knob to the heat mode you need (top heat, bottom heat, or fan).",
      "Turn the right knob to the temperature, usually 180 degrees Celsius for most dishes.",
      "Wait until the orange light turns off before putting food inside.",
      "After cooking, turn both knobs back to zero and leave the door slightly open to release heat.",
    ],
  },
  {
    title: "Hob",
    steps: [
      "Place the pan on the circle that matches the pan size.",
      "Turn the matching knob clockwise to start the heat.",
      "Keep the knob on a low or medium setting for slower cooking.",
      "Turn the knob back to zero when you finish. The glass stays hot for a few minutes.",
    ],
  },
  {
    title: "Washing machine",
    steps: [
      "Load clothes without packing the drum tightly.",
      "Pour detergent into the left compartment of the drawer.",
      "Select Cotton 40 for everyday clothes or Mix 30 for a quicker wash.",
      "Press Start and wait for the door lock light to turn off before opening.",
    ],
  },
  {
    title: "Coffee machine",
    steps: [
      "Fill the water tank at the back if it is below the minimum line.",
      "Add ground coffee or a pod, depending on the holder you use.",
      "Place a cup under the spout and press the small-cup or large-cup button.",
      "Empty the used grounds into the kitchen bin after each use.",
    ],
  },
];
