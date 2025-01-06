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
import Tictactics1 from "../assets/games/tictactics/tictactics.jpg";
import Kidnap1 from "../assets/games/kidnap/kidnapcommander.jpg";
import Mothership1 from "../assets/games/mothership/upgradeui.gif";
import Mothership2 from "../assets/games/mothership/levels.gif";

export interface GameModel {
    readonly title: string;
    readonly date: number;
    readonly readme: string;
    readonly source: string;
    readonly videos: string[]
    readonly playlistId: string;
    readonly images: string[];
}

export {
    NoManImage1, NoManImage2,
    Mothership1,
    Mothership2,
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
			date: 0, images: [], readme: "", source: "", title: "", playlistId: "", videos: []
		}
	}

    private games: Record<string, GameModel> = {};

    constructor() {
        const mothership: GameModel = {
            date: 20100401,
            images: [Mothership1, Mothership2],
            playlistId: "PLO-cM61x0SH3FxQSP198niWPcCxVSUiOj",
            readme: 'https://github.com/youdonotexist/MothershipFinal',
            source: 'https://github.com/youdonotexist/MothershipFinal',
            title: "Mothership: The Sequel",
            videos: []
        };

        const seeker: GameModel = {
            date: 20090301,
            images: [],
            readme: '',
            source: 'https://github.com/youdonotexist/seeker-game',
            title: "The Seeker",
            playlistId: "PLO-cM61x0SH06B6tjlgBaKajljl_sLjnH",
            videos: ['obtT9eOCMHM', 'QhbX6yiXeJg', 'IHR18tVv5U4', 'i7qcRTkQZ28', 'X7OaR5W5WGs', 'ayjhCZS1FM']
        }

        const noman: GameModel = {
            date: 20100401,
            images: [NoManImage1, NoManImage2],
            readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
            source: 'https://github.com/youdonotexist/no-man',
            title: "No^Man",
            playlistId: "",
            videos: []
        };

        const voodoll: GameModel = {
            date: 20111231,
            images: [
                Voodoll1
            ],
            readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
            source: 'https://github.com/youdonotexist/VooDoll',
            title: 'Voodoll',
            playlistId: "",
            videos: []
        };

        const alone: GameModel = {
            date: 20111215,
            images: [
                Alone1, Alone2, Alone3
            ],
            readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
            source: 'https://github.com/youdonotexist/Alone',
            title: 'The Unfortunate State of Being Alone',
            playlistId: "",
            videos: []
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
            playlistId: "",
            videos: []
        };

        const kidnap: GameModel = {
            date: 20120410,
            images: [
               Kidnap1
            ],
            readme: 'https://github.com/youdonotexist/KidnapCommander/blob/master/README.md',
            source: 'https://github.com/youdonotexist/KidnapCommander',
            title: "Kidnap Commander",
            playlistId: "",
            videos: []
        };

        const tictactics: GameModel = {
            date: 20120410,
            images: [
                Tictactics1
            ],
            readme: 'https://github.com/youdonotexist/TicTacApocolypse/blob/master/README.md',
            source: 'https://github.com/youdonotexist/TicTacApocolypse',
            title: "Tic Tactics",
            playlistId: "",
            videos: []
        };

        this.games.noman = noman;
        this.games.voodoll = voodoll;
        this.games.alone = alone;
        this.games.rubiq = rubiq;
        this.games.kidnap = kidnap;
        this.games.tictactics = tictactics;
        this.games.mothership = mothership;
        this.games.seeker = seeker;
    }

    public getData(id: string): Observable<GameModel> {
        if (this.games[id]) {
            return of(this.games[id]);
        }

        return of(GameViewModel.emptyGame());
    }
}
