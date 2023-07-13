import { SessionsList } from './SessionsList/SessionsList';
import { AddSessionForm } from './AddSessionForm/AddSessionForm';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import * as styles from './App.module.css';

export function App() {
	const [sessions, setSessions] = useLocalStorageState([], 'climbing-sessions');

	const addSession = (session) => {
		setSessions([session, ...sessions]);
	};

	return (
		<main className={styles.main}>
			<AddSessionForm onAddSession={addSession} />
			<SessionsList sessions={sessions} />
		</main>
	);
}
