import React from 'react';

import classes from './App.module.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { id: 'adfasdf', name: 'Max', age: 28 },
      { id: 'asdfasf', name: 'Manu', age: 29 },
      { id: 'asdf', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  // review
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //  review object[index]???/
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedclasses = [];
    if (this.state.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>react app</h1>
        <p className={assignedclasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
