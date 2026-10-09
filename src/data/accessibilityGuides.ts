export type AccessibilityGuide = {
  title: string;
  steps: string[];
};

export const accessibilityGuides: AccessibilityGuide[] = [
  {
    title: "Internet (Wi-Fi)",
    steps: [
      "Select the network named MEO-AED160_EXT.",
      "Enter the password: familiacosta",
    ],
  },
  {
    title: "Television",
    steps: [
      "Press the power button on the Samsung remote.",
      "Use the Source button if the screen stays black, then choose HDMI 1.",
      "Change channels with the number keys or the channel up and down buttons.",
      "To use streaming apps, press Home on the remote and choose the app you need.",
    ],
  },
  {
    title: "Oven",
    steps: [
      "Turn the left knob to select the cooking mode you need.",
      "Turn the right knob to set the temperature. 180°C is suitable for most dishes.",
      "Wait for the oven to reach the selected temperature before putting food inside.",
      "After cooking, turn both knobs back to zero.",
    ],
  },
  {
    title: "Induction hob",
    steps: [
      "Place a suitable induction pan on the cooking zone you want to use.",
      "Press the power button to turn on the hob.",
      "Select the cooking zone and use the + or − buttons to set the heat level.",
      "When you finish cooking, set the heat level to zero and turn off the hob.",
      "The glass surface may remain hot after cooking. Do not touch it until the hot-surface indicator turns off.",
    ],
  },
  {
    title: "Washing machine",
    steps: [
      "Load the clothes without packing the drum too tightly.",
      "Pour detergent into the detergent drawer.",
      "Select Cotton 40 for everyday clothes or Mix 30 for a quicker wash.",
      "Press Start and wait for the door lock light to turn off before opening.",
    ],
  },
  {
    title: "Coffee machine",
    steps: [
      "Fill the water tank if the water level is below the minimum mark.",
      "Turn on the coffee machine and wait until it is ready.",
      "Insert one coffee capsule into the capsule holder.",
      "Place a cup under the coffee outlet.",
      "Press the button for the coffee size you want.",
      "When the coffee is ready, remove the used capsule and place it in the bin.",
    ],
  },
];
