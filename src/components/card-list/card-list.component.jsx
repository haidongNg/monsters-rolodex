import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log('render from CardList');
    return (
      <div>
        {monsters.map((montser) => (
          <h1 key={montser.id}>{montser.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
