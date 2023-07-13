import { SessionsList } from './SessionsList/SessionsList';

const data = [
	{
		location: 'Berta Block',
		date: '12/07/2023',
		completedGrades: [
			{ grade: 'Blue', amount: 3 },
			{ grade: 'Green', amount: 10 },
			{ grade: 'Yellow', amount: 3 },
		],
	},
	{
		location: 'Berta Block',
		date: '06/07/2023',
		completedGrades: [
			{ grade: 'Blue', amount: 1 },
			{ grade: 'Green', amount: 10 },
		],
	},
];

const AddSessionForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const location = form.elements.location.value;
		const date = form.elements.date.value;
		const blue = form.elements.blue.value;
		const green = form.elements.green.value;
		const yellow = form.elements.yellow.value;
		const white = form.elements.white.value;
		const session = {
			location,
			date,
			completedGrades: [
				{ grade: 'Blue', amount: blue },
				{ grade: 'Green', amount: green },
				{ grade: 'Yellow', amount: yellow },
				{ grade: 'White', amount: white },
			],
		};
		console.log(session);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='location'>Location</label>
			<input type='text' id='location' />
			<label htmlFor='date'>Date</label>
			<input type='date' id='date' />
			<label htmlFor='blue'>Blue</label>
			<input type='number' id='blue' />
			<label htmlFor='green'>Green</label>
			<input type='number' id='green' />
			<label htmlFor='yellow'>Yellow</label>
			<input type='number' id='yellow' />
			<label htmlFor='white'>White</label>
			<input type='number' id='white' />
			<button type='submit'>Add Session</button>
		</form>
	);
};

export function App() {
	return (
		<>
			<AddSessionForm />
			<SessionsList sessions={data} />
		</>
	);
}
