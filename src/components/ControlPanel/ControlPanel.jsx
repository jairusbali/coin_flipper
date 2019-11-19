import React from "react";

import CoinImage from "./CoinImage/CoinImage";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinSide: undefined,
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
    this.setState(currState =>
      result
        ? { headCount: currState.headCount + 1 }
        : { tailCount: currState.tailCount + 1 }
    );
  }

  render() {
    const { headCount, tailCount, coinSide: flipResult } = this.state;

    return (
      <div>
        {headCount + tailCount === 0 ? (
          <h2>What to do...</h2>
        ) : (
          <CoinImage coinSide={flipResult} />
        )}

        <button onClick={this.flipCoin}>Flip Coin</button>
        <h2>Total coin flips: {headCount + tailCount} </h2>
        <h2>Did good {headCount} many times. </h2>
        <h2>Did evil {tailCount} many times. </h2>
      </div>
    );
  }
}

export default ControlPanel;
