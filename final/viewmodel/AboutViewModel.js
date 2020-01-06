import { of } from 'rxjs';
import ItchIcon from "../assets/itchio.png";
import TwitterIcon from '../assets/twitter.png';
import GithubIcon from "../assets/github.png";
import LinkedInIcon from "../assets/linkedin.svg";
import BlogspotIcon from "../assets/blogspot.png";
import EmailIcon from "../assets/email.png";
var AboutViewModel = /** @class */ (function () {
    function AboutViewModel() {
        this.contactLogos = [
            { icon: ItchIcon, url: "https://youdonotexist.itch.io/" },
            { icon: TwitterIcon, url: "https://twitter.com/youdonotexist" },
            { icon: GithubIcon, url: "https://github.com/youdonotexist" },
            { icon: LinkedInIcon, url: "https://www.linkedin.com/in/dalydev/" },
            { icon: BlogspotIcon, url: "https://basicallycam.blogspot.com/" },
            { icon: EmailIcon, url: "mailto:me@basically.cam" }
        ];
    }
    AboutViewModel.prototype.getData = function () {
        return of(this.contactLogos);
    };
    return AboutViewModel;
}());
export { AboutViewModel };
//# sourceMappingURL=AboutViewModel.js.map