import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state 의 초기값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick 을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState 를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // this.setState({ number: number + 1 });
            // this.setState((prevState, props) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({ number: prevState.number + 1 }));

            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
