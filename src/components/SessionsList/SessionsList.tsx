import { SessionEntry } from '../SessionEntry/SessionEntry';
import * as styles from './SessionsList.module.css';

interface SessionsListProps {
	sessions: Session[];
	deleteSessionHandler: (id: Session['id']) => void;
}

export const SessionsList = ({ sessions, deleteSessionHandler }: SessionsListProps) => {
	return (
		<>
			<h2 className={styles.heading}>Previous Sessions</h2>
			<ul className={styles.list}>
				{sessions.map((session) => (
					<li key={session.id} className={styles.listItem}>
						<SessionEntry
							session={session}
							deleteSessionHandler={deleteSessionHandler}
						/>
					</li>
				))}
			</ul>
		</>
	);
};
