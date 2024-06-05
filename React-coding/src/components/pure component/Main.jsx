import React from "react";
import MyPureComponent from "./MyPureComponent";

const Pure = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MyPureComponent name={name} />
      <button onClick={() => setName("Jane Doe")}>Change Name</button>
    </div>
  );
};

export default Pure;
