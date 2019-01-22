import React, {Component} from 'react';

//Css
import './App.css';

//Components
import Header from './components/Header'
import SectionController from "./components/SectionController";
import {Route} from "react-router-dom";

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Route component={Header}/>
				<Route component={SectionController}/>
			</div>
		);
	}
}

export default App;
