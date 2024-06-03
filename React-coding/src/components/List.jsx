import React, { useState } from "react";

const List = () => {
  const arr2 = ["play cricker", "play football", "watch movie"];
  const [arr, setArr] = useState(arr2);

  const [showDeleteIndex, setShowDeleteIndex] = useState(null);
  const handleDelete = (i) => {
    const updatedArr = [...arr];
    updatedArr.splice(i, 1);
    setArr(updatedArr);
  };

  const handleCheckBox = (i) => {
    setShowDeleteIndex(i === showDeleteIndex ? null : i);
  };
  return (
    <div>
      <h1>List</h1>
      <ul>
        {arr.map((item, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                onChange={() => handleCheckBox(i)}
                checked={i === showDeleteIndex}
              />
              {item}
              {showDeleteIndex === i ? (
                <span onClick={() => handleDelete(i)}>❎</span>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
