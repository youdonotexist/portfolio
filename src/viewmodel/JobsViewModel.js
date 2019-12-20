import * as Rx from "rxjs";
import SirsiDynix from "../assets/companies/sd.jpeg"
import L4 from "../assets/companies/l4.png"
import Globant from "../assets/companies/globant.png"
import ShopBop from "../assets/companies/shopbop.png"
import Crackle from "../assets/companies/crackle.jpeg"
import Ted from "../assets/companies/ted.png"
import Verizon from "../assets/companies/verizon.png"
import Bose from "../assets/companies/bose.jpeg"
import Ios from "../assets/tech/iOS.png";
import Android from "../assets/tech/android.jpeg";
import Unity from "../assets/tech/unity.png";
import Swift from "../assets/tech/swift.jpeg";
import Java from "../assets/tech/java.png";
import Javascript from "../assets/tech/js.png";
import CSharp from "../assets/tech/c-sharp.png";
import Reactive from "../assets/tech/reactive.png";

class JobsViewModel {

	constructor() {
		this.companies = [
			{
				"name": "SirsiDynix",
				"image": SirsiDynix
			},
			{
				"name": "L4 Digital",
				"image": L4
			},
			{
				"name": "Globant",
				"image": Globant
			}
		];

		this.projects = [
			{
				name: "ShopBop",
				image: ShopBop
			},
			{
				name: "Crackle",
				image: Crackle
			},
			{
				name: "TED",
				image: Ted
			},
			{
				name: "Verizon",
				image: Verizon
			},
			{
				name: "Bose",
				image: Bose
			},
		];

		this.platforms = [
			{
				name: 'ios',
				image: Ios
			},
			{
				name: 'android',
				image: Android
			},
			{
				name: 'Unity',
				image: Unity
			}
		];

		this.tech = [
			{
				name: 'swift',
				image: Swift
			},
			{
				name: 'java',
				image: Java
			},
			{
				name: 'javascript',
				image: Javascript
			},
			{
				name: 'C#',
				image: CSharp
			},
			{
				name: 'Reactive',
				image: Reactive
			},
		]
	}

	getJobsStream() {
		return Rx.of(this.companies);
	}

	getProjectsStream() {
		return Rx.of(this.projects);
	}

	getPlatformStream() {
		return Rx.of(this.platforms);
	}

	getTechStream() {
		return Rx.of(this.tech);
	}
}

export default JobsViewModel;