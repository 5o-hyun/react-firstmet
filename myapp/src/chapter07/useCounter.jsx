import React, { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // 0 아래로 못내려가게 막음

  return [count, increaseCount, decreaseCount];
};

export default useCounter;
