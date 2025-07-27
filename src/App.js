import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerIDs: [], // ✅ The test expects "timerIDs"
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
    this.handleRemoveTimer = this.handleRemoveTimer.bind(this);
  }

  handleAddTimer() {
    const newID = Math.random();
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, newID], // ✅ Update timerIDs
    }));
  }

  handleRemoveTimer(id) {
    this.setState((prevState) => ({
      timerIDs: prevState.timerIDs.filter((timerID) => timerID !== id),
    }));
  }

  // ✅ The test checks that componentDidMount is defined as a prototype method
  componentDidMount() {
    this.handleAddTimer(); // Adds 1 timer when app mounts
  }

  render() {
    return (
      <div>
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>

        {/* ✅ The test looks for ".TimerGrid" */}
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} id={id} onRemove={this.handleRemoveTimer} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
