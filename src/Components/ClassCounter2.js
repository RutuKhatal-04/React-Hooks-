import React, { Component } from "react";

class ClassCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  // on initial render execute this above function
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating document title");
      document.title = `Clickes ${this.state.count} times`;
    }
  }
  //   and after every render execute the above function
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <buttons onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </buttons>
      </div>
    );
  }
}

export default ClassCounter2;

// we have useEffect which runs both after the 1st render and after every render
