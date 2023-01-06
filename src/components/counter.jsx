import React, { Component } from "react";

class Counter extends Component {
  // if you don't want to use an arrow function
  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          {" "}
          +{" "}
        </button>
        <span className={this.getBadgeColor()}>{this.formatCounter()}</span>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          {" "}
          -{" "}
        </button>
        <div>
          <button
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeColor() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
