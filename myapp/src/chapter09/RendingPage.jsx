import React, { useState } from "react";
import ToolBar from "./ToolBar";

const RendingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <ToolBar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      ></ToolBar>
      <div style={{ padding: 16 }}>리액트 공부하기</div>
    </div>
  );
};

export default RendingPage;
