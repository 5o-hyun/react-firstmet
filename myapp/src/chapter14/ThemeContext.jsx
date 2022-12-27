import React from "react";

const ThemeContext = React.createContext(); // 초기값을 별도로 설정하지않았다. Provider에서 설정할거임
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
