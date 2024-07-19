import React, { useState } from "react";

export const ConfirmButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [prevState, setPrevState] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(!isConfirmed);
    setPrevState(!prevState);
  };

  return (
    <div>
      <button disabled={prevState} onClick={handleConfirm}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    </div>
  );
};

// export class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     };

//     this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   handleConfirm() {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }
