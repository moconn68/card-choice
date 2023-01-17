export enum CardEventCategory {
  Activity,
  Food,
  Location,
}

export type CardEvent = {
  category: CardEventCategory;
  text: string;
};

export const EVENTS: CardEvent[] = [
  // Activities
  {
    category: CardEventCategory.Activity,
    text: "Play mini-golf",
  },
  {
    category: CardEventCategory.Activity,
    text: "Watch a movie at the theater",
  },
  {
    category: CardEventCategory.Activity,
    text: "Do an escape room",
  },
  // Food
  {
    category: CardEventCategory.Food,
    text: "Eat Chinese food",
  },
  {
    category: CardEventCategory.Food,
    text: "Eat pho",
  },
  {
    category: CardEventCategory.Food,
    text: "Eat tacos",
  },
  // Locations
  {
    category: CardEventCategory.Location,
    text: "Go to the beach",
  },
  {
    category: CardEventCategory.Location,
    text: "Go to the mall",
  },
  {
    category: CardEventCategory.Location,
    text: "Go to Target",
  },
];
