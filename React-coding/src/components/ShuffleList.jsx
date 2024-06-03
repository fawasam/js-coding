import React, { useState } from "react";

const ShuffleList = () => {
  const [items, setItems] = useState([
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grapes",
  ]);

  const handleShuffle = () => {
    const shuffleditems = [...items];
    for (let i = shuffleditems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleditems[i], shuffleditems[j]] = [
        shuffleditems[j],
        shuffleditems[i],
      ];
    }
    setItems(shuffleditems);
  };

  const handleSort = (value) => {
    const sortedItems = [...items];
    if (value == -1) {
      sortedItems.sort().reverse();
    } else {
      sortedItems.sort();
    }
    setItems(sortedItems);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ width: "200px" }}>
          {items.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleShuffle} style={{ marginRight: "10px" }}>
        Shuffle
      </button>
      <button onClick={() => handleSort(1)} style={{ marginRight: "10px" }}>
        Sort
      </button>
      <button onClick={() => handleSort(-1)}>Reverse Sort</button>
    </>
  );
};

export default ShuffleList;
