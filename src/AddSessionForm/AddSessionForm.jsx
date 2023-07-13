export const AddSessionForm = ({ onAddSession }) => {
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

		onAddSession(session);
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
