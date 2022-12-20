import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const user = [
    { id: 1, name: "김소현", comment: "제가 만든 첫 컴포넌트입니다." },
    { id: 2, name: "오승빈", comment: "리액트 너무 재밌어요~!" },
    { id: 3, name: "최현덕", comment: "저도 리액트 하고싶어요" },
  ];
  return (
    <div>
      {user.map((item) => (
        <Comment name={item.name} comment={item.comment} />
      ))}
    </div>
  );
};

export default CommentList;
