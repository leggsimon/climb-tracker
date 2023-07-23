import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as styles from './AddSessionForm.module.css';

const GYMS = [
	{
		name: 'Berta Block',
		id: 'berta-block',
		grades: [
			{ id: 'black', name: 'Black', color: '#000000' },
			{ id: 'purple', name: 'Purple', color: '#6f42c1' },
			{ id: 'blue', name: 'Blue', color: '#007bff' },
			{ id: 'green', name: 'Green', color: '#28a745' },
			{ id: 'yellow', name: 'Yellow', color: '#ffc107' },
			{ id: 'white', name: 'White', color: '#eeeeee' },
		],
	},
];

export const AddSessionForm = ({ onAddSession }) => {
	const [gym, setGym] = useState(GYMS[0]);
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	const [completedGrades, setCompletedGrades] = useState(
		gym.grades.reduce((acc, grade) => {
			acc[grade.id] = 0;
			return acc;
		}, {}),
	);

	const resetSession = () => {
		setGym(GYMS[0]);
		setDate(new Date().toISOString().slice(0, 10));
		setCompletedGrades(
			gym.grades.reduce((acc, grade) => {
				acc[grade.id] = 0;
				return acc;
			}, {}),
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const session = {
			id: uuidv4(),
			location: gym.name,
			date,
			completedGrades: [
				...gym.grades.map((grade) => ({
					grade: grade.name,
					amount: completedGrades[grade.id],
				})),
			],
		};

		onAddSession(session);
		resetSession();
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
						defaultValue={date}
						onChange={(e) => {
							e.preventDefault();
							setDate(e.target.value);
						}}
					/>
				</label>
			</div>

			{gym.grades.map((grade) => (
				<label
					className={styles.label}
					style={{ '--grade-color': grade.color }}
					htmlFor={grade.id}
				>
					{grade.name}
					<input
						type='number'
						id={grade.id}
						inputmode='numeric'
						className={styles.textInput}
						defaultValue={0}
						value={completedGrades[grade.id]}
						onChange={(e) => {
							setCompletedGrades((prev) => {
								return { ...prev, [grade.id]: e.target.value };
							});
						}}
					/>
				</label>
			))}
			<button className={styles.button} type='submit'>
				Add Session
			</button>
		</form>
	);
};