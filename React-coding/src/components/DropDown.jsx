import React, { useState } from "react";

const DropDown = () => {
  const [country, setCountry] = useState(null);
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  return (
    <>
      <h1>DropDown</h1>
      <select onChange={handleChange}>
        <option value="" key={"12"}>
          Select Country
        </option>
        {countries.map((item, i) => (
          <option value={item.value} key={i}>
            {item.name}
          </option>
        ))}
      </select>

      {country ? (
        <select>
          <option value="">Select City</option>
          {country &&
            countries
              .find((c) => c.value === country)
              ?.cities.map((city, i) => (
                <option value={city} key={i}>
                  {city}
                </option>
              ))}
        </select>
      ) : (
        ""
      )}
    </>
  );
};

export default DropDown;
