import { Component } from "react";
import "./card-style.css";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div key={id} className={`card ${this.props.cardClassName}`}>
        <img
          src={`https://robohash.org/${id}?set=set3&size=180x180`}
          className={`card-image`}
          alt={`monster ${name}`}
        ></img>
        <h1 className={`title ${this.props.cardTitle}`}>{name}</h1>
        <p> {email}</p>
      </div>
    );
  }
}

export default Card;
