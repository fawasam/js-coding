import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";
import useToggle from "../hooks/useToggle";

const CusotmHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  const [value, toggleValue] = useToggle(false);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>MAKE TRUE</button>
      <button onClick={() => toggleValue(false)}>MAKE FALSE</button>
    </>
  );
};

export default CusotmHooks;
