import './App.css';

// Components
import React, {useEffect, useRef} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import {Header} from './components/Header';
import SectionController from "./components/SectionController";
import Backdrop from "./components/Backdrop";

const App: React.FC = () => {

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<div className="App">
			<Backdrop></Backdrop>

			{/* Always-visible header */}
			<Header/>

			{/* React Router setup */}
			<HashRouter>
				<Routes>
					{/* SectionController handles all other routes */}
					<Route path="/*" element={<SectionController/>}/>
				</Routes>
			</HashRouter>


				<div className={"footer"}>
					Special thanks to <a href={"https://edermunizz.itch.io/"}>edermunizz</a> for the pixel art
				</div>
		</div>
	);
};

export default App;