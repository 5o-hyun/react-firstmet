import React from "react";

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://via.placeholder.com/90x90.png?text=image"
          alt="이미지"
          style={styles.image}
        />
      </div>
      <div style={styles.contentsContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 10,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  contentsContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
  },
  CommentText: {
    color: "black",
    fontSize: 16,
  },
};

export default Comment;
