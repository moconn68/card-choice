import { CardEvent, CardEventCategory } from "lib/data";
import { getIconForCategory } from "lib/utils";
import { useState } from "react";

export interface CardProps {
  event: CardEvent;
}
export default function Card(props: CardProps): JSX.Element {
  const { event } = props;
  const [flippedClass, setFlippedClass] = useState<string>("");
  function handleClick(event: React.MouseEvent) {
    setFlippedClass((state) => {
      return state === "" ? "flip-anim" : "";
    });
  }
  return (
    <div aria-label="flip-card" className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flippedClass}`}>
        <div className="flip-card-front">
          <h1>{getIconForCategory(event.category)}</h1>
        </div>
        <div className="flip-card-back">
          <h1>{event.text}</h1>
        </div>
      </div>
    </div>
  );
}
