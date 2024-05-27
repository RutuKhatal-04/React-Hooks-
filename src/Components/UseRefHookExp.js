//Normal timer without useRef hook

import React, { Component } from "react";

export class UseRefHookExp extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>ClearTimer</button>
      </div>
    );
  }
}

export default UseRefHookExp;
