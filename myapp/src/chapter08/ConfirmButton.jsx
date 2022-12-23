import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    // 1. 확인여부를 저장하기위해 state에 isConfirm이라는 변수를 가지고있으며 초기값은 false
    this.state = {
      isConfirm: false,
    };

    this.handleConfirm = this.handleConfirm.bind(this); // 3. bind로 처리
  }

  // 2. 버튼에 클릭이벤트를 처리하기위해 이벤트핸들러로 handleConfirm이라는 함수를 만들어 넣어줌
  handleConfirm() {
    this.setState((prevState) => ({
      isConfirm: !prevState.isConfirm,
    }));
  }

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirm}>
        {this.state.isConfirm ? "확인함" : "확인안함"}
      </button>
    );
  }
}

export default ConfirmButton;
