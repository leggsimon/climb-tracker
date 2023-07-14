import { SessionsList } from './components/SessionsList/SessionsList';
import { AddSessionForm } from './components/AddSessionForm/AddSessionForm';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import * as styles from './App.module.css';

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

export function App() {
	const [sessions, setSessions] = useLocalStorageState([], 'climbing-sessions');

	const addSession = (session) => {
		setSessions([session, ...sessions]);
	};

	return (
		<main className={styles.main}>
			<h1>Session Tracker</h1>
			<AddSessionForm onAddSession={addSession} />
			<SessionsList sessions={sessions} />
		</main>
	);
}
