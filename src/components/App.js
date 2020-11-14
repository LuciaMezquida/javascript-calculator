import "../styleSheets/App.css";
import React from "react";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operations = ["/", "*", "-", "+"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "-": "subtract",
  "+": "add",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPressed: undefined,
      calc: "0",
      operation: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    console.log(ev.target.innerHTML);
    const calc = this.state.calc;
    const keyText = ev.target.innerHTML;
    switch (keyText) {
      case "AC":
        this.setState({
          calc: "0",
        });
        break;
      case "=":
        const result = eval(calc);
        this.setState({
          calc: result,
        });
    }
  }
  render() {
    const numberKeys = numbers.map((item) => (
      <button onClick={this.handleClick} className={item === 0 ? "big-h btn" : "btn"} key={item}>
        {item}
      </button>
    ));
    const operationKeys = operations.map((item, index) => (
      <button onClick={this.handleClick} className="btn orange" key={index}>
        {item}
      </button>
    ));
    return (
      <div className="calculator">
        <div id="display" className="display">
          {this.state.calc}
        </div>
        <div className="nums-container">
          <button className="btn ac big-h" onClick={this.handleClick} id="clear">
            AC
          </button>
          {numberKeys}
          <button className="btn" onClick={this.handleClick} id="decimal">
            .
          </button>
        </div>
        <div className="ops-container">
          {operationKeys}
          <button className="orange btn" onClick={this.handleClick} id="equals">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
