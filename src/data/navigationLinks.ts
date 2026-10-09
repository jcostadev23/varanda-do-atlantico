export type NavigationLink = {
  href: string;
  label: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/suggestions", label: "Suggestions" },
  { href: "/utilities", label: "Utilities" },
];
