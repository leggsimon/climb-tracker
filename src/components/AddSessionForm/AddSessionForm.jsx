import { useState } from 'react';
import * as styles from './AddSessionForm.module.css';

export const AddSessionForm = ({ onAddSession }) => {
	const [newSession, setNewSession] = useState({
		location: 'Berta Block',
		date: new Date().toISOString().slice(0, 10),
		completedGrades: [],
	});

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
			<div className={styles.addSessionHeader}>
				<select
					className={styles.select}
					name='location'
					id='location'
					onChange={(e) => {
						console.log(e.target.value);
					}}
				>
					<option selected>Berta Block</option>
				</select>
				<label htmlFor='date'>
					<span className={styles.visuallyHidden}>Date</span>
					<input
						className={styles.date}
						type='date'
						id='date'
						defaultValue={newSession.date}
						onChange={(e) => {
							setNewSession({ ...newSession, date: e.target.value });
						}}
					/>
				</label>
			</div>

			<label className={`${styles.label} ${styles.blue}`} htmlFor='blue'>
				Blue
				<input type='number' id='blue' inputmode='numeric' className={styles.textInput} />
			</label>
			<label className={`${styles.label} ${styles.green}`} htmlFor='green'>
				Green
				<input type='number' id='green' inputmode='numeric' className={styles.textInput} />
			</label>
			<label className={`${styles.label} ${styles.yellow}`} htmlFor='yellow'>
				Yellow
				<input type='number' id='yellow' inputmode='numeric' className={styles.textInput} />
			</label>
			<label className={`${styles.label} ${styles.white}`} htmlFor='white'>
				White
				<input type='number' id='white' inputmode='numeric' className={styles.textInput} />
			</label>
			<button className={styles.button} type='submit'>
				Add Session
			</button>
		</form>
	);
};
