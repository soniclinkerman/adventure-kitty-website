import React, { Component } from 'react';
import './App.css';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { characters } from '../data/character';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor(){
    super();
    this.state = {
      characters:characters,
      searchField: ""
    }
  }

  filterCharacters = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {characters, searchField} = this.state;

    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1>Meet the Gang</h1>
        
        <SearchBox 
        type={"text"}
        searchChange={this.filterCharacters}/>

        <Scroll>
          <CardList characters={filteredCharacters}/>
        </Scroll>
        
      </div>
    );
  }
}

export default App;
