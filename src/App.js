import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

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
    console.log("rendering from app", this.state.monsters.length);

    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchValue)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type={"search"}
          placeholder="search for monster"
          onChange={this.searchHandler.bind(this)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
