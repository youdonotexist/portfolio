import React, {Component} from 'react';

interface CommitDetails {
    commitMessage: string;
    commitDate: number;
}

interface GitHistoryState {
    commits: CommitDetails[];
    success: boolean;
}

export class GitHistoryComponent extends Component<{}, GitHistoryState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            commits: [],
			success: false
        };
    }

    public render() {
        return null;
    }
}
