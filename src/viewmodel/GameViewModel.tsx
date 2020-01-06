import {Observable, of} from 'rxjs';

import NoManImage1 from "../assets/games/noman/noman1.jpg";
import NoManImage2 from "../assets/games/noman/noman2.jpg";
import Voodoll1 from "../assets/games/voodoll/1.png";
import Alone1 from "../assets/games/alone/1.png";
import Alone2 from "../assets/games/alone/2.png";
import Alone3 from "../assets/games/alone/3.jpg";
import Rubiq1 from "../assets/games/rubiq/1.jpg";
import Rubiq2 from "../assets/games/rubiq/2.jpg";
import Rubiq3 from "../assets/games/rubiq/3.jpg";
import Rubiq4 from "../assets/games/rubiq/4.jpg";
import Rubiq5 from "../assets/games/rubiq/5.jpg";

export interface GameModel {
    readonly title: string;
    readonly date: number;
    readonly readme: string;
    readonly source: string;
    readonly images: string[];
}

export {
    NoManImage1, NoManImage2,
    Alone1,
    Alone2,
    Alone3,
    Rubiq1,
    Rubiq2,
    Rubiq3,
    Rubiq4,
    Rubiq5,
    Voodoll1
}

export class GameViewModel {
	public static emptyGame(): GameModel {
		return {
			date: 0, images: [], readme: "", source: "", title: ""
		}
	}

    private games: Record<string, GameModel> = {};

    constructor() {
        const noman: GameModel = {
            date: 20100401,
            images: [NoManImage1, NoManImage2],
            readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
            source: 'https://github.com/youdonotexist/no-man',
            title: "No^Man",
        };

        const voodoll: GameModel = {
            date: 20111231,
            images: [
                Voodoll1
            ],
            readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
            source: 'https://github.com/youdonotexist/VooDoll',
            title: 'Voodoll'
        };

        const alone: GameModel = {
            date: 20111215,
            images: [
                Alone1, Alone2, Alone3
            ],
            readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
            source: 'https://github.com/youdonotexist/Alone',
            title: 'The Unfortunate State of Being Alone'
        };

        const rubiq: GameModel = {
            date: 20120410,
            images: [
                Rubiq1,
                Rubiq2,
                Rubiq3,
                Rubiq4,
                Rubiq5
            ],
            readme: 'https://github.com/youdonotexist/RubiqsGarden/blob/master/README.md',
            source: 'https://github.com/youdonotexist/RubiqsGarden',
            title: "Rubiq's Garden",

        };

        this.games.noman = noman;
        this.games.voodoll = voodoll;
        this.games.alone = alone;
        this.games.rubiq = rubiq;
    }

    public getData(id): Observable<GameModel> {
        if (this.games[id]) {
            return of(this.games[id]);
        }

        return of(GameViewModel.emptyGame());
    }
}
