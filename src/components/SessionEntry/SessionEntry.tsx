import * as styles from './SessionEntry.module.css';

interface SessionEntryProps {
	session: Session;
	deleteSessionHandler: (id: Session['id']) => void;
}

const dateStringToDate = (dateString: string) => {
	const [year, month, day] = dateString.split('-');
	return new Date(Number(year), Number(month) - 1, Number(day));
};

export const SessionEntry = ({ session, deleteSessionHandler }: SessionEntryProps) => {
	const handleDelete = (event) => {
		event.preventDefault();
		deleteSessionHandler(session.id);
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headingContainer}>
					<button className={styles.deleteButton} onClick={handleDelete}>
						🚮
					</button>
					<h3 className={styles.heading}>{session.location}</h3>
				</div>
				<span className={styles.date}>
					<time>
						{dateStringToDate(session.date).toLocaleString(undefined, {
							year: '2-digit',
							month: 'short',
							day: 'numeric',
						})}
					</time>
				</span>
			</div>
			<ul className={styles.list}>
				{session.completedGrades.map((grade) => (
					<li className={`${styles.listItem} ${styles[grade.grade.toLowerCase()]}`}>
						<span>{grade.grade}:</span>
						<span>{grade.amount}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
