import { of } from 'rxjs';
import NoManImage from "../assets/noman.jpg";
import UnfortunateImage from "../assets/unfortunate.png";
import RubiqImage from "../assets/rubiq.jpg";
import MothershipImage from "../assets/basic_boxart.png";
import TictacticsImage from "../assets/tictactics.jpg";
import KidnapCommandoImage from "../assets/kidnapcommander.jpg";
import VooDollImage from "../assets/games/voodoll/1.png";
var GamesViewModel = /** @class */ (function () {
    function GamesViewModel() {
        this.projects = [
            {
                date: 20100401,
                id: "noman",
                image: NoManImage,
                readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/no-man',
                title: "No^Man"
            },
            {
                date: 20111215,
                id: "alone",
                image: UnfortunateImage,
                readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/Alone',
                title: "The Unfortunate State of Being Alone",
            },
            {
                date: 20120410,
                id: "rubiq",
                image: RubiqImage,
                readme: 'https://github.com/youdonotexist/RubiqsGarden/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/RubiqsGarden',
                title: "Rubiq's Garden"
            },
            {
                date: 0,
                id: 'mothership',
                image: MothershipImage,
                readme: '',
                released: true,
                source: '',
                title: "Mothership: The Sequel",
            },
            {
                date: 0,
                id: 'tictactics',
                image: TictacticsImage,
                readme: '',
                released: false,
                source: '',
                title: "Tic Tactics",
            },
            {
                date: 0,
                id: 'kidnap',
                image: KidnapCommandoImage,
                readme: '',
                released: false,
                source: '',
                title: "Kidnap Commander",
            },
            {
                date: 20120110,
                id: 'voodoll',
                image: VooDollImage,
                readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/VooDoll',
                title: "Voodoll",
            }
        ];
    }
    GamesViewModel.prototype.getJamGames = function () {
        return of(this.projects
            .filter(function (project) { return !project.released; })
            .sort(function (a, b) {
            return b.date - a.date;
        }));
    };
    GamesViewModel.prototype.getReleasedGames = function () {
        return of(this.projects
            .filter(function (project) { return project.released; })
            .sort(function (a, b) {
            return b.date - a.date;
        }));
    };
    return GamesViewModel;
}());
export default GamesViewModel;
//# sourceMappingURL=GamesViewModel.js.map