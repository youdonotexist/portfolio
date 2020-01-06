import './App.css';

// Components
import React from "react";
import {Route} from "react-router-dom";

import {SectionController} from "./components/SectionController";
import {Header} from './components/Header'



class App extends React.Component {
	public render() {
		return (
			<div className="App">
				<Route component={Header}/>
				<Route component={SectionController}/>
			</div>
		);
	}
}

export default App;
