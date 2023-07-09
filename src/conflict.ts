import { Match } from "./Match";
import { WrestlerStats } from "./wrestler";

export interface Conflict {
	wrestlers: WrestlerStats[];
}

export const groupConflict = (match: Match) => {
	const { conflicts, wrestlers } = match;

	// remove all conflicts that are no longer valid
	const currentConflicts = conflicts.filter((conflict) => conflict.wrestlers.length > 1);


	// get all wrestlers not in a conflict
	const availableWrestlers = wrestlers.filter((wrestler) => !currentConflicts.some((conflict) => conflict.wrestlers.includes(wrestler)));
	
	// try and group wrestlers into conflicts
	const newConflicts = availableWrestlers.reduce((acc, wrestler) => {	
		const conflict = acc.find((conflict) => conflict.wrestlers.some((w) => w.styles.some((style) => wrestler.styles.includes(style))));
		if (conflict) {
			conflict.wrestlers.push(wrestler);
		} else {
			acc.push({ wrestlers: [wrestler] });
		}
		return acc;
	}
	, currentConflicts);
}