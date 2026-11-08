export type NavigationLink = {
  href: string;
  label: string;
  icon: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home", icon: "fi fi-rr-home" },
  {
    href: "/accessibility",
    label: "Accessibility",
    icon: "fi fi-rr-universal-access",
  },
  { href: "/suggestions", label: "Suggestions", icon: "fi fi-rr-bulb" },
  { href: "/utilities", label: "Utilities", icon: "fi fi-rr-tools" },
  {
    href: "/useful-information",
    label: "Useful information",
    icon: "fi fi-rr-info",
  },
  { href: "/instagram", label: "Instagram", icon: "fi fi-brands-instagram" },
];
