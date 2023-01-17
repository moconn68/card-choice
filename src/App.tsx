import React, { useState } from "react";
import { getRandomEventsByCategory } from "lib/utils";
import "./App.css";
import { CardEvent, CardEventCategory } from "lib/data";
import Card from "components/Card";

function App() {
  const [events, updateEvents] = useState<[CardEvent, CardEvent]>(
    getRandomEventsByCategory(CardEventCategory.Activity)
  );
  return (
    <div className="App">
      <div className="cards-container">
        <Card event={events[0]} />
        <Card event={events[1]} />
      </div>
    </div>
  );
}

export default App;
