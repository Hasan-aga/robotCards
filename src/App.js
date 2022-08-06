import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
    console.log("constructor");
  }

  updateMonsters = (data) =>
    this.setState(() => {
      return { monsters: data };
    });

  searchHandler(event) {
    this.setState(() => {
      const searchValue = event.target.value.toLocaleLowerCase();
      return { searchValue };
    });
  }

  componentDidMount() {
    console.log("component did mount");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then(this.updateMonsters);
  }

  render() {
    console.log("rendering");

    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchValue)
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <input
          className="search-box"
          type={"search"}
          placeholder="search for monster"
          onChange={this.searchHandler.bind(this)}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
