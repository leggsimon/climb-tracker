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

	const clearAllSessions = () => {
		if (window.confirm('Are you sure you want to delete all sessions?')) {
			setSessions([]);
		}
	};

	const deleteSession = (id) => {
		if (window.confirm('Are you sure you want to delete this session?')) {
			setSessions(sessions.filter((session) => session.id !== id));
		}
	};

	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<button
					className={styles.button}
					onClick={(e) => {
						e.preventDefault();
						clearAllSessions();
					}}
				>
					🚮
				</button>
				<h1>Session Tracker</h1>
			</div>
			<AddSessionForm onAddSession={addSession} />
			<SessionsList sessions={sessions} deleteSessionHandler={deleteSession} />
		</main>
	);
}
