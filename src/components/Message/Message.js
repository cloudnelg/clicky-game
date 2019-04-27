import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  state = {
    work: false,
    message: ""
  };

  // Runs on each state change //
  componentDidUpdate(oProps) {
    let newState = {
      work: true
    };

    const { score, topScore } = oProps;

    // Dynamic Message //
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score !== 0 && topScore > 0) {
      newState.message = "correct";
    } else {
      newState.message = "incorrect";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "correct":
        return "Nice!";
      case "incorrect":
        return "Fail!";
      default:
        return "Click someone!";
    }
  };

  render() {
    return (
      <li className="Message" id={`${this.state.message}`}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default Message;
