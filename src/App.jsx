import { SessionsList } from './SessionsList/SessionsList';
import { AddSessionForm } from './AddSessionForm/AddSessionForm';
import { useLocalStorageState } from './hooks/useLocalStorageState';

export function App() {
	const [sessions, setSessions] = useLocalStorageState([], 'climbing-sessions');

	const addSession = (session) => {
		setSessions([session, ...sessions]);
	};

	return (
		<>
			<AddSessionForm onAddSession={addSession} />
			<SessionsList sessions={sessions} />
		</>
	);
}
