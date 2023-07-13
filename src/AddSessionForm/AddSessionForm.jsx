import { useState } from 'react';
import * as styles from './AddSessionForm.module.css';

export const AddSessionForm = ({ onAddSession }) => {
	const [newSession, setNewSession] = useState({
		location: 'Berta Block',
		date: new Date().toISOString().slice(0, 10),
		completedGrades: [],
	});
	const today = new Date();
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		const blue = form.elements.blue.value;
		const green = form.elements.green.value;
		const yellow = form.elements.yellow.value;
		const white = form.elements.white.value;

		const session = {
			location: newSession.location,
			date: newSession.date,
			completedGrades: [
				{ grade: 'Blue', amount: blue },
				{ grade: 'Green', amount: green },
				{ grade: 'Yellow', amount: yellow },
				{ grade: 'White', amount: white },
			],
		};

		onAddSession(session);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label class={styles.label} htmlFor='location'>
				Location
				<input
					type='text'
					id='location'
					defaultValue={newSession.location}
					onChange={(e) => {
						setNewSession({ ...newSession, location: e.target.value });
					}}
				/>
			</label>
			<label class={styles.label} htmlFor='date'>
				Date
				<input
					type='date'
					id='date'
					defaultValue={newSession.date}
					onChange={(e) => {
						setNewSession({ ...newSession, date: e.target.value });
					}}
				/>
			</label>
			<label class={styles.label} htmlFor='blue'>
				Blue
				<input type='number' id='blue' inputmode='numeric' />
			</label>
			<label class={styles.label} htmlFor='green'>
				Green
				<input type='number' id='green' inputmode='numeric' />
			</label>
			<label class={styles.label} htmlFor='yellow'>
				Yellow
				<input type='number' id='yellow' inputmode='numeric' />
			</label>
			<label class={styles.label} htmlFor='white'>
				White
				<input type='number' id='white' inputmode='numeric' />
			</label>
			<button className={styles.button} type='submit'>
				Add Session
			</button>
		</form>
	);
};
