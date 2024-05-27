import React, { Component } from "react";

class ClassCounter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  IncrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.IncrementCount}>Count {count}</button>
      </div>
    );
  }
}

export default ClassCounter1;
