import React from "react";

import CoinImage from "./CoinImage/CoinImage";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinSide: 0,
      headCount: 0,
      tailCount: 0
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    // randomly return 1(head) or 0(tail)
    const result = Math.floor(Math.random() * 2);
    console.log(result);
    this.setState({ coinSide: result });
  }

  render() {
    const { headCount, tailCount, coinSide: flipResult } = this.state;

    return (
      <div>
        <CoinImage coinSide={flipResult} />
        <button onClick={this.flipCoin}>Flip Coin</button>
        <h2>Total coin flips: {headCount + tailCount} </h2>
        <h2>Did good {headCount} many times. </h2>
        <h2>Did evil {tailCount} many times. </h2>
      </div>
    );
  }
}

export default ControlPanel;
