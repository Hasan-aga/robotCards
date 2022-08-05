import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "Hasan" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name}</p>
          <button
            onClick={() =>
              this.setState(
                () => {
                  return { name: "Ali" };
                },
                () => {
                  console.log(this.state);
                }
              )
            }
          >
            change
          </button>
        </header>
      </div>
    );
  }
}

export default App;
