import { Component } from "react";
import Card from "../card/card.component";
import "./cardlist-style.css";

class CardList extends Component {
  render() {
    console.log("rendering from cardlist", this.props.monsters.length);

    return (
      <div className={`cards ${this.props.containerClassName}`}>
        {this.props.monsters.map((monster) => {
          return (
            <Card searchValue={this.props.searchValue} monster={monster}></Card>
          );
        })}
      </div>
    );
  }
}

export default CardList;
