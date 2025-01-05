import {Observable, of} from 'rxjs';

import ItchIcon from "../assets/itchio.png";
import TwitterIcon from '../assets/twitter.png';
import GithubIcon from "../assets/github.png";
import LinkedInIcon from "../assets/linkedin.png";
import BlogspotIcon from "../assets/blogspot.png";
import EmailIcon from "../assets/email.png";

export interface ContactMethodModel {
    icon: string;
    url: string;
}

export class AboutViewModel {
    private contactLogos: ContactMethodModel[];

    constructor() {
        this.contactLogos = [
            {icon: ItchIcon, url: "https://youdonotexist.itch.io/"},
            {icon: TwitterIcon, url: "https://twitter.com/youdonotexist"},
            {icon: GithubIcon, url: "https://github.com/youdonotexist"},
            {icon: LinkedInIcon, url: "https://www.linkedin.com/in/dalydev/"},
            {icon: BlogspotIcon, url: "https://basicallycam.blogspot.com/"},
            {icon: EmailIcon, url: "mailto:me@basically.cam"}
        ];
    }

    public getData() : Observable<ContactMethodModel[]> {
        return of(this.contactLogos);
    }
}
