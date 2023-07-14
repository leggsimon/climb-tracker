import * as styles from './SessionEntry.module.css';

export const SessionEntry = ({ session, deleteSessionHandler }) => {
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
					<time>{session.date}</time>
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
