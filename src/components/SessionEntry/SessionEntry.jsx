export const SessionEntry = ({ session }) => {
	return (
		<li>
			<div>
				<h3>{session.location}</h3>
				<span>
					<time>{session.date}</time>
				</span>
			</div>
			<ul>
				{session.completedGrades.map((grade) => (
					<li>
						<span>{grade.grade}:</span>
						<span>{grade.amount}</span>
					</li>
				))}
			</ul>
		</li>
	);
};
