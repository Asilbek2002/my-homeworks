import React, { Component } from "react";

import "./calculate.scss";
export default class Calculate extends Component {
  state = {
    count: "",
    total: "",
  };
  handleCount = (e) => {
    this.setState({ count: this.state.count.concat(e.target.innerText) });
  };
  handleResult = () => {
    // eslint-disable-next-line no-eval
    this.setState({ count: eval(this.state.count) });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  handleModule = () => {
    this.setState({ count: this.state.count * -1 });
  };
  handlePercentage = () => {
    this.setState({count: this.state.count / 100})
  }

  render() {
    return (
      <>
        <div className="calculate-container">
          <div className="calculate">
            <div className="calculate-display">
              <h1>{this.state.count}</h1>
            </div>
            <div  className="calculate-controls">
              <div
                onClick={this.handleReset}
                className="calculate-control gray"
              >
                AC
              </div>
              <div
                onClick={this.handleModule}
                className="calculate-control gray"
              >
                +/-
              </div>
              <div
                onClick={this.handlePercentage}
                className="calculate-control gray"
              >
                %
              </div>
              <div
                onClick={this.handleCount}
                className="calculate-control color"
              >
                /
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                7
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                8
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                9
              </div>
              <div
                onClick={this.handleCount}
                className="calculate-control color"
              >
                *
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                4
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                5
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                6
              </div>
              <div
                onClick={this.handleCount}
                className="calculate-control color"
              >
                -
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                1
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                2
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                3
              </div>
              <div
                onClick={this.handleCount}
                className="calculate-control color"
              >
                +
              </div>
              <div onClick={this.handleCount} className="calculate-control big">
                0
              </div>
              <div onClick={this.handleCount} className="calculate-control">
                .
              </div>
              <div
                onClick={this.handleResult}
                className="calculate-control color"
              >
                =
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
