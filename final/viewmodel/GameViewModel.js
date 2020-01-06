import { of } from 'rxjs';
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
var GameViewModel = /** @class */ (function () {
    function GameViewModel() {
        this.games = {};
        var noman = {
            date: 20100401,
            images: [
                NoManImage1,
                NoManImage2
            ],
            readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
            source: 'https://github.com/youdonotexist/no-man',
            title: "No^Man",
        };
        var voodoll = {
            date: 20111231,
            images: [
                Voodoll1
            ],
            readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
            source: 'https://github.com/youdonotexist/VooDoll',
            title: 'Voodoll'
        };
        var alone = {
            date: 20111215,
            images: [
                Alone1, Alone2, Alone3
            ],
            readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
            source: 'https://github.com/youdonotexist/Alone',
            title: 'The Unfortunate State of Being Alone'
        };
        var rubiq = {
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
    GameViewModel.emptyGame = function () {
        return {
            date: 0, images: [], readme: "", source: "", title: ""
        };
    };
    GameViewModel.prototype.getData = function (id) {
        if (this.games[id]) {
            return of(this.games[id]);
        }
        return of(GameViewModel.emptyGame());
    };
    return GameViewModel;
}());
export default GameViewModel;
//# sourceMappingURL=GameViewModel.js.map