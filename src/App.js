import React, { Component } from "react";

import "./App.css";
import { Display } from "./components/Card-list/Card-list.component";
import { Searchbox } from "./components/search-box/search-box.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const findMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
       <h2> Monsters Rolodex</h2>
        <Searchbox
         placeholder="Find Monsters"
        handlchange={(e) => this.setState({ searchField: e.target.value })}
        />

        <Display monsters={findMonsters} />
      </div>
    );
  }
}

export default App;
