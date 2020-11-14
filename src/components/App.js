import "../styleSheets/App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div id="display" className="display">
          display
        </div>
        <div className="nums-container">
          <button className="ac big-h" onClick={this.handleClick} id="clear">
            AC
          </button>

          <button onClick={this.handleClick} id="decimal">
            .
          </button>
        </div>
        <div className="ops-container">
          <button className="orange" onClick={this.handleClick} id="equals">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
