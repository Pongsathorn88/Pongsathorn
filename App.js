import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
import {Buuton} from 'antd';

class App extends Component {
  state = {
    characters  
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
}


render () {
  const { characters } = this.state
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}

export default App;
