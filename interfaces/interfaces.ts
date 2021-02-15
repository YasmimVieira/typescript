interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "The last of us",
    description: "the best game in the world",
    genre: "Action",
    platform: ["Ps3", "Ps4"],
    getSimilars: (title: string) => {
		console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro` );
	},
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftBehind: DLC = {
    title: "the last of us - Left behind",
    description: "you play as ellie before the original game",
    genre: "action",
    platform: ["Ps4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}