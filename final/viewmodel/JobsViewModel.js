import * as Rx from "rxjs";
var SirsiDynix = ("../assets/companies/sd.jpeg");
var L4 = ("../assets/companies/l4.png");
var Globant = ("../assets/companies/globant.png");
var ShopBop = ("../assets/companies/shopbop.png");
var Crackle = ("../assets/companies/crackle.jpeg");
var Ted = ("../assets/companies/ted.png");
var Verizon = ("../assets/companies/verizon.png");
var Bose = ("../assets/companies/bose.jpeg");
var Ios = ("../assets/tech/iOS.png");
var Android = ("../assets/tech/android.jpeg");
var Unity = ("../assets/tech/unity.png");
var Swift = ("../assets/tech/swift.jpeg");
var Java = ("../assets/tech/java.png");
var Javascript = ("../assets/tech/js.png");
var CSharp = ("../assets/tech/c-sharp.png");
var Reactive = ("../assets/tech/reactive.png");
var JobsViewModel = /** @class */ (function () {
    function JobsViewModel() {
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
        ];
    }
    JobsViewModel.prototype.getJobsStream = function () {
        return Rx.of(this.companies);
    };
    JobsViewModel.prototype.getProjectsStream = function () {
        return Rx.of(this.projects);
    };
    JobsViewModel.prototype.getPlatformStream = function () {
        return Rx.of(this.platforms);
    };
    JobsViewModel.prototype.getTechStream = function () {
        return Rx.of(this.tech);
    };
    return JobsViewModel;
}());
export default JobsViewModel;
//# sourceMappingURL=JobsViewModel.js.map