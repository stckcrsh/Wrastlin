const JAKE = require('./jake-wrestleman.json');
const JOHNNY = require('./johnny-longarms.json');
const MOVES = require('./moves.json');

const createWrestler = (base) => {
	return {
		...base,
		crowd: 0,
		stagger: 0,
		tired: 0,
		moves: MOVES.filter((move) => move.tags.includes(base.style)),
	};
};

const findMove = (wrestler) => {
	const num = Math.floor(Math.random() * wrestler.moves.length);

	return wrestler.moves[num];
};

const executeMove = (move, lead, targets, game) => {
	const { name, damage, stagger, text } = move;

	// Update lead
	lead.crowd += damage;
	lead.tired += stagger

	// Update targets
	targets.forEach((target) => {
		target.stagger += stagger;
		target.crowd -= stagger;
	});

	const moveEvent = {
		text:`${lead.first_name} ${lead.last_name} reaches out and uses ${text} on ${targets.map((target) => `${target.first_name} ${target.last_name}`).join(', ')}`,
		move: name,
		lead: {
			id: lead.id,
			crowd: lead.crowd,
			tired: lead.tired,
		},
		targets: targets.map((target) => ({
			id: target.id,
			stagger: target.stagger,
			tired: target.tired,
		})),
	}

	// Update game
	game.history.push(moveEvent);

	console.log(moveEvent.text)

	// Check if game is over
	if (lead.crowd >= 100 || targets.some((target) => target.stagger >= 100)) {
		game.isGameOver = true;
		console.log('Game Over');
	}
};

const findLead = (game) => {
	return game.wrestlers[
		Object.keys(game.wrestlers)
			.map((id) => {
				const wrestler = game.wrestlers[id];
				var spry = wrestler.spry * Math.random();
				var tired = wrestler.tired - (wrestler.recovery * Math.random());

				return { id: id, score: spry * tired };
			})
			.sort((a, b) => b.score - a.score)[0].id
	];
};

const endOfRound = (game) => {
	const { wrestlers } = game;

	Object.values(wrestlers).forEach((wrestler:any) => {
		wrestler.tired = Math.max(wrestler.tired - (Math.random() * wrestler.recovery), 0);
		wrestler.stagger = Math.max(wrestler.stagger - (Math.random() * wrestler.recovery), 0);
	})

}

const simulate = () => {

	const game = {
		isGameOver: false,
		history: [],
		wrestlers: {
			[JAKE.id]: createWrestler(JAKE),
			[JOHNNY.id]: createWrestler(JOHNNY),
		}
	};


	while (!game.isGameOver) {
		const lead = findLead(game);
		const targets = Object.values(game.wrestlers).filter((target) => target.id !== lead.id);
		const move = findMove(lead);
		executeMove(move, lead, targets, game);

		endOfRound(game);
	}
};

simulate();
