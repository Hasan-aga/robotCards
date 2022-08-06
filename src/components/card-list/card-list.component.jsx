import { Component } from "react";
import "./card-style.css";

class CardList extends Component {
  render() {
    console.log("rendering from cardlist", this.props.monsters.length);

    return (
      <div className={`cards ${this.props.containerClassName}`}>
        {this.props.monsters.map((monster) => (
          <div className={`card ${this.props.cardClassName}`} key={monster.id}>
            <img
              src={`https://robohash.org/${monster.id}?set=set3`}
              className={`card-image`}
              alt={`monster ${monster.name}`}
            ></img>
            <h1 className={`title ${this.props.cardTitle}`}>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
