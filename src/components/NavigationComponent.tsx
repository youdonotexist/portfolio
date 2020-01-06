import React, {Component} from 'react';
import {Link} from "react-router-dom";
import HeaderViewModel from "../viewmodel/HeaderViewModel";

interface NavigationState {
    sections: string[]
}

export class NavigationComponent extends Component<{}, NavigationState> {
    private viewModel: HeaderViewModel;

    constructor(props) {
        super(props);

        this.viewModel = new HeaderViewModel();
        this.state = {
            sections: []
        };
    }

    public componentDidMount() {
        this.viewModel.getData().subscribe((items) => {
            this.setState({'sections': items})
        });
    }

    public render() {
        return (
            <div className="Navigation-Container">
                <div className="Header-sections">
                    {this.state.sections.map((sectionName, index) => {
                        return (
                            <Link key={index} to={'/' + sectionName.toLowerCase()}
                                  className={"Header-section"}> {sectionName} </Link>
                        )
                    })}
                </div>
                <div style={{height: '100%', float: 'left', width: '1px', color: "black"}}/>
            </div>
        );
    }
}
