import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("contructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Call API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Handle search
  onSearchField = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField: searchField });
  };

  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchField } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchField}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
