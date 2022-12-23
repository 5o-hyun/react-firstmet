import React from "react";

// Class fields syntax 사용하기
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirm: false,
    };

    // bind함수제거
  }
  // arrow function으로 변경
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirm: !prevState.isConfirm,
    }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirm}>
        {this.state.isConfirm ? "확인함" : "확인안함"}
      </button>
    );
  }
}

export default ConfirmButton;
