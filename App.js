import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App;