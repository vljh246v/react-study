import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다.
//       <br />
//       children 값은 {children}
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// function MyComponent({ name, favoriteNumber, children }) {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다.
//       <br />
//       children 값은 {children}
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// }

class MyComponent extends Component {
  //   static defaultProps = { // 외부 선언이 우선
  //     name: "기본이름2",
  //   };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다.
        <br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = { name: "기본이름" };
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
