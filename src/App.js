import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadingMess: false,
      apiData: []
    }
  }

componentDidMount() {
  this.setState({loadingMess: true})
  fetch("https://swapi.co/api/people")
  .then(response => response.json())
  .then(data => {
    this.setState({
      loadingMess: false,
      apiData: data.results[1]
    })
  })
}

  render() {
    const people = this.state.loadingMess ? "Loading...." : this.state.apiData.name
    return (
      <div>
      { console.log(this.state.apiData) }
        <h1>{ people }</h1>
      </div>
    );    
  }
}

export default App;
//"https://swapi.co/api/people/1"