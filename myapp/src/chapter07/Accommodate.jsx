import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

const Accommodate = (props) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 의존성배열이 없는 형태 : mount된직후에호출, 이후 update될때마다 호출. 버튼누르면 컴포넌트가 업데이트되어 호출됨
  useEffect(() => {
    console.log("===============");
    console.log("useEffect() is called");
    console.log(`isFull : ${isFull}`);
  });

  // 의존성배열이 있는 형태 : mount된직후에호출, 이후 count값이 바뀔때마다 호출 . 이때 용량이가득찼는지 아닌지 상태를 isFull이라는 state저장
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`current count value : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
    </div>
  );
};

export default Accommodate;
