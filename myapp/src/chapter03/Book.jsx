import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`페이지수는 ${props.pages}p입니다.`}</h2>
    </div>
  );
}
export default Book;
