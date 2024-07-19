import React, { useState } from "react";

export const ConfirmButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((current) => !current);
  };

  return (
    <div>
      <button disabled={isConfirmed} onClick={handleConfirm}>
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
