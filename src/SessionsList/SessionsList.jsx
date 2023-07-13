import { SessionEntry } from '../components/SessionEntry/SessionEntry';

export const SessionsList = ({ sessions }) => {
	return (
		<>
			<h2>Previous Sessions</h2>
			<ul>
				{sessions.map((session) => (
					<SessionEntry session={session} />
				))}
			</ul>
		</>
	);
};
