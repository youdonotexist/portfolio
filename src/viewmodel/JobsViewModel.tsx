import * as Rx from "rxjs";

import SirsiDynix from "../assets/companies/sd.jpeg";
import L4 from "../assets/companies/l4.png";
import Globant from "../assets/companies/globant.png";
import ShopBop from "../assets/companies/shopbop.png";
import Crackle from "../assets/companies/crackle.jpeg";
import Ted from "../assets/companies/ted.png";
import Verizon from "../assets/companies/verizon.png";
import Bose from "../assets/companies/bose.jpeg";
import Ios from "../assets/tech/iOS.png";
import Android from "../assets/tech/android.jpeg";
import Unity from "../assets/tech/unity.png";
import Swift from "../assets/tech/swift.jpeg";
import Java from "../assets/tech/java.png";
import Javascript from "../assets/tech/js.png";
import CSharp from "../assets/tech/c-sharp.png";
import Reactive from "../assets/tech/reactive.png";

export interface JobModel {
    image: string;
    name: string
}

export class JobsViewModel {
    private companies: JobModel[];
    private projects: JobModel[];
    private platforms: JobModel[];
    private tech: JobModel[];

    constructor() {
        this.companies = [
            {
                "image": SirsiDynix,
                "name": "SirsiDynix"
            },
            {
                "image": L4,
                "name": "L4 Digital"
            },
            {
                "image": Globant,
                "name": "Globant"
            }
        ];

        this.projects = [
            {
                image: ShopBop,
                name: "ShopBop"
            },
            {
                image: Crackle,
                name: "Crackle"
            },
            {
                image: Ted,
                name: "TED"
            },
            {
                image: Verizon,
                name: "Verizon",

            },
            {
                image: Bose,
                name: "Bose",

            },
        ];

        this.platforms = [
            {
                image: Ios,
                name: 'ios',

            },
            {
                image: Android,
                name: 'android',

            }
        ];

        this.tech = [
            {
                image: Swift,
                name: 'swift',

            },
            {
                image: Java,
                name: 'java',

            },
            {
                image: Javascript,
                name: 'javascript',

            },
            {
                image: CSharp,
                name: 'C#',

            },
            {
                image: Reactive,
                name: 'Reactive',

            },
            {
                image: Unity,
                name: 'Unity',

            }
        ]
    }

    public getJobsStream() {
        return Rx.of(this.companies);
    }

	public getProjectsStream() {
        return Rx.of(this.projects);
    }

	public getPlatformStream() {
        return Rx.of(this.platforms);
    }

	public getTechStream() {
        return Rx.of(this.tech);
    }
}