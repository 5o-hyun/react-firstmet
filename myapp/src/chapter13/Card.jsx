import React from "react";

const Card = (props) => {
  const { title, backgroundColor, children } = props; // children : containment사용, title backgroundColor : specialization사용
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        borderRadius: 8,
        boxShadow: "0px 0px 4px gray",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
