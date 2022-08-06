import { Component } from "react";
import "./card-style.css";

class CardList extends Component {
  render() {
    console.log("rendering from cardlist", this.props.monsters.length);

    return (
      <div className={`cards ${this.props.containerClassName}`}>
        {this.props.monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <div className={`card ${this.props.cardClassName}`} key={id}>
              <img
                src={`https://robohash.org/${id}?set=set3&size=180x180`}
                className={`card-image`}
                alt={`monster ${name}`}
              ></img>
              <h1 className={`title ${this.props.cardTitle}`}>{name}</h1>
              <p> {email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
