import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
    console.log("search handler", this);
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
        <h1 className="logo">No Country for Old Bot</h1>
        <SearchBox
          className="search-box"
          placeholder="search for bots"
          handleSearch={this.searchHandler.bind(this)}
        ></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
