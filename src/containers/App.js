import React from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(`[App.js] constructor`);
		this.state = {
			persons: [
				{ id: 'adfasdf', name: 'Max', age: 28 },
				{ id: 'asdfasf', name: 'Manu', age: 29 },
				{ id: 'asdf', name: 'Stephanie', age: 26 },
			],
			otherState: 'some other value',
			showPersons: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log(`[App.js] getDerivedStateFromProps`, props);
		return state;
	}

	componentDidMount() {
		console.log(`[App.js] componentDidMount`);
	}

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
		console.log(`[App.js] render`);
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
