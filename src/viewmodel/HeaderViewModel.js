import * as Rx from "rxjs/Rx"
import 'rxjs-compat'

class HeaderViewModel {
	constructor() {
		this.sections = [
			"About",
			"Games",
			"Work"
		];

	}

	getData() {
		return Rx.Observable.of(this.sections);
	}
}

export default HeaderViewModel;