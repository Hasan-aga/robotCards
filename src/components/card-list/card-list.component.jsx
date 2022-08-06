import { Component } from "react";
import "./card-style.css";

class CardList extends Component {
  render() {
    console.log("rendering from cardlist", this.props.monsters.length);

    return (
      <div className="cards">
        {this.props.monsters.map((monster) => (
          <div className={this.props.className} key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
