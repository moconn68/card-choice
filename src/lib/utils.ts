import { CardEvent, CardEventCategory, EVENTS } from "lib/data";

/**
 * Gets two random events based on a provided event category.
 * @param category
 * @returns tuple of CardEvents
 */
export function getRandomEventsByCategory(
  category: CardEventCategory
): [CardEvent, CardEvent] {
  const options = EVENTS.filter((e) => e.category === category);
  const event1 = options[Math.floor(Math.random() * options.length)];
  options.splice(options.indexOf(event1), 1);
  const event2 = options[Math.floor(Math.random() * options.length)];
  return [event1, event2];
}

/**
 * Gets the corresponding icon for the front of a card, based on the event category.
 * TODO this needs to actually return icon/URI/etc instead of single placeholder char
 * @param category
 * @returns
 */
export function getIconForCategory(category: CardEventCategory): string {
  switch (category) {
    case CardEventCategory.Activity:
      return "A";
    case CardEventCategory.Food:
      return "F";
    case CardEventCategory.Location:
      return "L";
    default:
      throw new Error("Could not match category!");
  }
}
