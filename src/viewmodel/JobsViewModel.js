import * as Rx from "rxjs";

class JobsViewModel {

	constructor() {
		this.jobs = [
			{
				"name": "Globant",
				"title": "Principal Engineer | Tech Manager",
				"date": {
					"start": 0,
					"end": 0
				},
				"projects": [
					{
						"name": "Verizon Digital Signage",
						"platforms": "Android",
						"description": "Lead Developer for a Digital Signage application running on Android hardware plugged into televisions." +
							"Lead a team of 3 developers, gathered requirements, estimated and prioritized work, designed and implemented early architecture, " +
							"feature development, managed sprint commitments, direct client communication and delivery of application on time and under budget.",
						"keywords": ["Architecture", "RxJava", "Android", "Javascript", "Sqlite"]
					},
					{
						"name": "TedConnect",
						"platforms": "Android",
						"description": "Architect and developer on Android app for conference attendees with thousands of attendees held multiple times a year\n" +
							"○ Architect and developer on Android app. Features include:\n" +
							"■ System for attendees to view conference schedule, follow speakers\n" +
							"■ Real-time networking and chat capability\n" +
							"■ Robust offline support allowing the app the function even in poor-network conditions\n" +
							"○ Worked in tandem with backend engineers to find solution to improve overall performance of client application",
						"keywords": ["Architecture", "Android", "DBFlow", "Sqlite", "Java"]
					},
					{
						"name": "Sinclair",
						"platforms": "iOS",
						"description": "Architect and developer on iOS app for a news company that services hundreds of televisions stations\n" +
							"○ Architected and developed a white label news app from the ground up using Swift, ReactiveX,\n" +
							"and Realm\n" +
							"○ Helped client’s engineering team finish other high-priority project that required extra\n" +
							"man-power to meet release deadlines",
						"keywords": ["Architecture", "Swift", "iOS", "RxSwift"]
					}
				]
			}
		]
	}

	getJobsStream() {
		return Rx.of(this.jobs);
	}

}

export default JobsViewModel;