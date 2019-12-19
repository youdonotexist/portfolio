import * as Rx from "rxjs";
import SirsiDynix from "../assets/companies/sd.jpeg"
import L4 from "../assets/companies/l4.png"
import Globant from "../assets/companies/globant.png"

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
	}

	getJobsStream() {
		return Rx.of(this.companies);
	}

}

export default JobsViewModel;