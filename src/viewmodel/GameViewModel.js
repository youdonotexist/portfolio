import React, {Component} from 'react';
import * as Rx from "rxjs";
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


class GameViewModel {
	constructor() {
		this.games = {};

		var noman = {
			title: "No^Man",
			date: '20100401',
			readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
			source: 'https://github.com/youdonotexist/no-man',
			images: [
				NoManImage1,
				NoManImage2
			]
		};

		var voodoll = {
			title: 'Voodoll',
			date: '20111231',
			readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
			source: 'https://github.com/youdonotexist/VooDoll',
			images: [
				Voodoll1
			]
		};

		var alone = {
			title: 'The Unfortunate State of Being Alone',
			date: 20111215,
			readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
			source: 'https://github.com/youdonotexist/Alone',
			images: [
				Alone1, Alone2, Alone3
			]
		};

		var rubiq = {
			title: "Rubiq's Garden",
			date: 20120410,
			readme: 'https://github.com/youdonotexist/RubiqsGarden/blob/master/README.md',
			source: 'https://github.com/youdonotexist/RubiqsGarden',
			images: [
				Rubiq1,
				Rubiq2,
				Rubiq3,
				Rubiq4,
				Rubiq5
			]
		};

		this.games.noman = noman;
		this.games.voodoll = voodoll;
		this.games.alone = alone;
		this.games.rubiq = rubiq;
	}

	getData(id) {
		if (this.games[id]) {
			return Rx.Observable.of(this.games[id]);
		}

		return Rx.Observable.of(this.emptyGame());
	}

	emptyGame() {
		return {
			name: 'empty',
			description: 'none'
		}
	}
}

GameViewModel.propTypes = {};

export default GameViewModel;
