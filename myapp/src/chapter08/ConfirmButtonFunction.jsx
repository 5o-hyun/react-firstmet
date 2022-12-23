import React, { useState } from "react";

const ConfirmButtonFunction = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = () => {
    setIsConfirm((prevConfirm) => !prevConfirm);
  };
  return (
    <button onClick={handleConfirm} disabled={isConfirm}>
      {isConfirm ? "확인함" : "확인안함"}
    </button>
  );
};

export default ConfirmButtonFunction;
