import React, { useState } from "react";
import "./App.css";

interface CardProps {
  iconUri?: string;
  text: string;
}
function Card(props: CardProps): JSX.Element {
  const { iconUri, text } = props;
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
          {iconUri ? (
            <img
              src={iconUri}
              alt="Card Icon"
              style={{ width: 100, height: 100 }}
            />
          ) : (
            <h1>?</h1>
          )}
        </div>
        <div className="flip-card-back">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <Card text="First Card" />
        <Card text="Second Card" />
      </div>
    </div>
  );
}

export default App;
