import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Stark', age:28},
      {name: 'Manu', age:27},
      {name: 'Steph', age:26},
    ]
  });

  const [otherState, setOtherState] = useState( 'some other state');

  const switchNameHandler = () => {
      //console.log('was clciked');
      //Dont DO this: this.state.persons[0].name = 'Tony Stark';
      setPersonsState({persons: [
        {name: 'Tony Stark', age:283},
        {name: 'Manu', age:27},
        {name: 'Steph', age:25},
      ]
    })
  }


  return (
    <div className="App">
      
        <h1>HI IM a react root</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          
        />
        <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
            click = {switchNameHandler}
          > mY HOBBIES racing
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
        />
      
    </div>
    // return React.createElemnent()
  );
}

export default App;
