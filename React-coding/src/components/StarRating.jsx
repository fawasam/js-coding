import React, { useState } from "react";

const StarRating = (props) => {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);
  const handleStarClick = (i) => {
    setRating(i + 1);
  };
  return (
    <>
      <h1>Star Rating</h1>

      {[...Array(limit)].map((_, i) => (
        <span key={i} onClick={() => handleStarClick(i)}>
          {i < rating ? "🫥" : "⭐"}
        </span>
      ))}
    </>
  );
};

export default StarRating;
