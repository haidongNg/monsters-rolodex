import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
    // console.log("render from App");
    const { monsters, searchField } = this.state;
    const { onSearchField } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchField} className="monster-search-box" placeholder="Search monster"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
