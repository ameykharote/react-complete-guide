import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Stark', age:28},
      {name: 'Manu', age:27},
      {name: 'Steph', age:26},
    ]
  }

  switchNameHandler = (newName) => {
      //console.log('was clciked');
      //Dont DO this: this.state.persons[0].name = 'Tony Stark';
    this.setState({
      persons: [
        {name: newName, age:283},
        {name: 'Manu', age:27},
        {name: 'Steph', age:25}
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Tony Stark', age:23},
        {name: event.target.value, age:26},
        {name: 'Natasha Romanoff', age:274}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        
          <h1>HI IM a react root</h1>
          
          <button
          style = {style} 
          onClick={this.switchNameHandler.bind(this, 'Capt America')}>Switch Name</button>
          
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            
          />
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this, 'Steve Rogers')}
              changed = {this.changeNameHandler}
            > mY HOBBIES racing
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
          />
        
      </div>
      // return React.createElemnent()
    );
  }
}

export default App;
