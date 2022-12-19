import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="파이썬" pages="300"></Book>
      <Book name="AWS" pages="400"></Book>
      <Book name="리액트" pages="500"></Book>
    </div>
  );
}
export default Library;
