import { Component } from "react";
import "./card-style.css";
import Highlighter from "react-highlight-words";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    const { searchValue } = this.props;
    return (
      <div key={id} className={`card ${this.props.cardClassName}`}>
        <img
          src={`https://robohash.org/${id}?set=set3&size=180x180`}
          className={`card-image`}
          alt={`monster ${name}`}
        ></img>
        <h1 className={`title ${this.props.cardTitle}`}>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[searchValue]}
            autoEscape={true}
            textToHighlight={name}
          />
        </h1>
        <p> {email}</p>
      </div>
    );
  }
}

export default Card;
