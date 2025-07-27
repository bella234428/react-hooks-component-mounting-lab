import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.clockTick = this.clockTick.bind(this);
  }

  // Increment time every second
  clockTick() {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  }

  // ✅ Start the interval when the component mounts
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // ✅ Clear the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Time: {this.state.time}</h2>
        <button onClick={() => this.props.onRemove(this.props.id)}>
          Remove Timer
        </button>
      </div>
    );
  }
}

export default Timer;
