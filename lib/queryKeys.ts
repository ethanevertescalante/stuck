export const queryKeys = {
  stickies: {
    all: ["stickies"] as const,
    one: (stickyId: string) =>
      ["stickies", "one", stickyId] as const,
  },
};
