import { SessionEntry } from '../SessionEntry/SessionEntry';
import * as styles from './SessionsList.module.css';

export const SessionsList = ({ sessions }) => {
	return (
		<>
			<h2 className={styles.heading}>Previous Sessions</h2>
			<ul className={styles.list}>
				{sessions.map((session) => (
					<li className={styles.listItem}>
						<SessionEntry session={session} />
					</li>
				))}
			</ul>
		</>
	);
};
