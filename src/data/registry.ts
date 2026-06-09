export interface AnimationItem {
  id: string;
  title: string;
  files: string[];
}

export const animationRegistry: Record<string, AnimationItem> = {
  "animation-1": {
    id: "animation-1",
    title: "navigation-menu",
    files: ["index.tsx"],
  },
};
