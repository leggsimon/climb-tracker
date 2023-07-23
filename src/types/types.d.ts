interface Session {
	id: string;
	location: Gym['name'];
	date: string;
	completedGrades: {
		grade: string;
		amount: number;
	}[];
}

interface Grade {
	id: string;
	name: string;
	color: string;
}
interface Gym {
	id: string;
	name: string;
	grades: Grade[];
}
