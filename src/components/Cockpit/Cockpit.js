import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
	useEffect(() => {
		console.log(`[Cockpit.js] useEffect`);
	});

	const assignedclasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		assignedclasses.push(classes.red);
	}

	if (props.persons.length <= 1) {
		assignedclasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>react app</h1>
			<p className={assignedclasses.join(' ')}>This is really working</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default Cockpit;
