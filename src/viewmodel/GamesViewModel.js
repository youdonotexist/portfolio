import NoManImage from "../assets/noman.jpg";
import UnfortunateImage from "../assets/unfortunate.png";
import RubiqImage from "../assets/rubiq.jpg";
import MothershipImage from "../assets/basic_boxart.png";
import TictacticsImage from "../assets/tictactics.jpg";
import KidnapCommandoImage from "../assets/kidnapcommander.jpg";
import VooDollImage from "../assets/games/voodoll/1.png";
import * as Rx from "rxjs";

class GamesViewModel {

	constructor() {

		this.projects = [
			{
				image: NoManImage,
				title: "No^Man",
				id: "noman",
				released: false,
				date: 20100401,
				readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
				source: 'https://github.com/youdonotexist/no-man'
			},
			{
				image: UnfortunateImage, title: "The Unfortunate State of Being Alone", id: "alone", released: false, date: 20111215,
				readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
				source: 'https://github.com/youdonotexist/Alone'
			},
			{
				image: RubiqImage, title: "Rubiq's Garden", id: "rubiq", released: false, date: 20120410,
				readme: 'https://github.com/youdonotexist/RubiqsGarden/blob/master/README.md',
				source: 'https://github.com/youdonotexist/RubiqsGarden'
			},
			{
				image: MothershipImage, title: "Mothership: The Sequel", id:'mothership', released: true, date: 0
			},
			{
				image: TictacticsImage, title: "Tic Tactics", id: 'tictactics', released: false, date: 0
			},
			{
				image: KidnapCommandoImage, title: "Kidnap Commander", id: 'kidnap', released: false, date: 0
			},
			{
				image: VooDollImage, title: "Voodoll", id: 'voodoll', released: false, date: 20120110,
				readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
				source: 'https://github.com/youdonotexist/VooDoll'
			}

		]
	}

	getJamGames() {
		return Rx.Observable.of(this.projects
			.filter(project => project.released === false)
			.sort(function(a, b){return b.date - a.date}));
	}

	getReleasedGames() {
		return Rx.Observable.of(this.projects
			.filter(project => project.released === true)
			.sort(function(a, b){return b.date - a.date}));
	}
}

export default GamesViewModel;
