import React from "react";

const AttendanceBook = () => {
  const students = [
    { id: 1, name: "sohyun" },
    { id: 2, name: "seungbeen" },
    { id: 3, name: "hyunduck" },
    { id: 4, name: "younggil" },
  ];
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
