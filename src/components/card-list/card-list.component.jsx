import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log("render from CardList");
    return (
      <div className="card-list">
        {monsters.map((monster) => (<Card key={monster.id} monster={monster} />))}
      </div>
    );
  }
}

export default CardList;
