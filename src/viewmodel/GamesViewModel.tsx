import {Observable, of} from 'rxjs';

export interface ProjectModel {
    title: string;
    id: string;
    released: boolean;
    date: number;
    readme: string;
    source: string;
}

export class GamesViewModel {
    private projects: ProjectModel[];

    constructor() {
        this.projects = [
            {
                date: 20100401,
                id: "noman",
                readme: 'https://github.com/youdonotexist/no-man/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/no-man',
                title: "No^Man"
            },
            {
                date: 20111215,
                id: "alone",
                readme: 'https://github.com/youdonotexist/Alone/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/Alone',
                title: "The Unfortunate State of Being Alone",
            },
            {
                date: 20120410,
                id: "rubiq",
                readme: 'https://github.com/youdonotexist/RubiqsGarden/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/RubiqsGarden',
                title: "Rubiq's Garden"
            },
            {
                date: 0,
                id: 'mothership',
                readme: '',
                released: true,
                source: '',
                title: "Mothership: The Sequel",
            },
            {
                date: 0,
                id: 'tictactics',
                readme: '',
                released: false,
                source: '',
                title: "Tic Tactics",
            },
            {
                date: 0,
                id: 'kidnap',
                readme: '',
                released: false,
                source: '',
                title: "Kidnap Commander",
            },
            {
                date: 20120110,
                id: 'voodoll',
                readme: 'https://github.com/youdonotexist/VooDoll/blob/master/README.md',
                released: false,
                source: 'https://github.com/youdonotexist/VooDoll',
                title: "Voodoll",
            }

        ]
    }

    public getJamGames(): Observable<ProjectModel[]> {
        return of(this.projects
            .filter(project => !project.released)
            .sort((a, b) => {
                return b.date - a.date
            }));
    }

    public getReleasedGames(): Observable<ProjectModel[]> {
        return of(this.projects
            .filter(project => project.released)
            .sort((a, b) => {
                return b.date - a.date
            }));
    }
}
