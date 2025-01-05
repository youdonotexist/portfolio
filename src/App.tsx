import './App.css';

// Components
import React, {useEffect, useRef} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from './components/Header';
import SectionController from "./components/SectionController";
import {
	Application,
	Assets,
	Container,
	Graphics,
	Point,
	Sprite,
	Ticker,
	TilingSprite,
	TilingSpriteOptions
} from "pixi.js";

import cloud1 from './assets/pixel/bg_cloud1.png';
import cloud2 from './assets/pixel/bg_cloud2.png';
import cloud3 from './assets/pixel/bg_cloud3.png';
import cloud5 from './assets/pixel/bg_cloud5.png';
import cloud6 from './assets/pixel/bg_cloud6.png';
import cloud7 from './assets/pixel/bg_cloud7.png';
import cloud8 from './assets/pixel/bg_cloud8.png';

import type {UnresolvedAsset} from "pixi.js/lib/assets/types";

import sky1 from './assets/pixel/nightsky/bg0sky.png';
import sky2 from './assets/pixel/nightsky/bg01.png';
import sky3 from './assets/pixel/nightsky/bg02.png';
import sky4 from './assets/pixel/nightsky/bg03.png';
import sky5 from './assets/pixel/nightsky/bg04.png';
import sky6 from './assets/pixel/nightsky/bg05.png';

const App: React.FC = () => {

	const pixiRef = useRef<HTMLDivElement | null>(null);
	const appRef = useRef<Application | null>(null);

	let loadedPixi = false;

	const addClouds = async (container: Container, width: number) => {
		let cloudAssets = [
			await Assets.load(cloud1),
			await Assets.load(cloud2),
			await Assets.load(cloud3),
			await Assets.load(cloud5),
			await Assets.load(cloud6),
			await Assets.load(cloud7),
			await Assets.load(cloud8)];
		let cloutCount =  10;
		let clouds: Sprite[] = [];

		for(var i = 0; i < cloutCount; i++) {
			const cloudRand = Math.floor(Math.random() * cloudAssets.length);

			const texture = cloudAssets[cloudRand];

			const cloud = new Sprite(texture);
			clouds.push(cloud);

			cloud.x = Math.floor(Math.random() * container.width) - 200;
			cloud.y = Math.floor(Math.random() * 170);
			cloud.pivot.y = cloud.height;
			container.addChild(cloud);
		}

		let ticker = Ticker.shared;
		ticker.add(function (time) {
			for (let i = 0; i < cloutCount; i++) {
				clouds[i].x += .1;
				if (clouds[i].x > width) {
					clouds[i].x = -clouds[i].width;
				}
			}
		});
	};

	const addBackground = async(texture: string, width: number) => {
		let skyTex = await Assets.load(texture);
		skyTex.source.scaleMode = 'nearest';
		const tilingSpriteOptions: TilingSpriteOptions = {
			texture: skyTex,
			y: 500,
			width: width, // Width of the tiling sprite
			tileScale: new Point(1, 1), // Scale the texture (default is 1,1)
			tilePosition: new Point(0, 0), // Position of the texture (default is 0,0)
		};
		return new TilingSprite(tilingSpriteOptions);
	};

	useEffect(() => {
		// Initialize PixiJS application
		// Create a new application
		const app = new Application();
		appRef.current = app;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				appRef.current?.renderer?.resize(width, height);
				debugger;
			}
		});

		if (pixiRef.current) {
			resizeObserver.observe(pixiRef.current);
		}

		const init = async () => {
			await app.init({ background: '#aaaaaa', resizeTo: window });

			appRef.current = app;
			debugger;

			if (pixiRef.current) {
				pixiRef.current.appendChild(app.canvas as HTMLCanvasElement);
			}

			// Create and add a container to the stage

			const bgContainer = new Container();
			bgContainer.x = 0;
			bgContainer.y = 0;
			bgContainer.width = app.renderer.width;
			bgContainer.height = app.renderer.height;

			let sky = new Graphics()
				.rect(0,0, app.renderer.width, app.renderer.height)
				.fill(0x36567F);

			let ground = new Graphics()
				.rect(0,500, app.renderer.width, app.renderer.height - 500)
				.fill(0x111B2F);

			bgContainer.addChild(sky);
			bgContainer.addChild(ground);

			bgContainer.addChild(await addBackground(sky1, app.renderer.width));
			bgContainer.addChild(await addBackground(sky2, app.renderer.width));
			bgContainer.addChild(await addBackground(sky3, app.renderer.width));
			bgContainer.addChild(await addBackground(sky4, app.renderer.width));
			bgContainer.addChild(await addBackground(sky5, app.renderer.width));
			bgContainer.addChild(await addBackground(sky6, app.renderer.width));



			app.stage.addChild(bgContainer);


			addClouds(bgContainer, app.renderer.width.valueOf());

		}

		if (!loadedPixi) {
			loadedPixi = true;
			init()
				.catch(console.error);
		}

		//return () => {
		//	resizeObserver.disconnect();
		//	app.destroy(true, true);
		//};

	}, []);

	return (
		<div className="App">
			<div
				ref={pixiRef}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1, // Place behind other content
				}}
			></div>

			{/* Always-visible header */}
			<Header/>

			{/* React Router setup */}
			<BrowserRouter>
				<Routes>
					{/* SectionController handles all other routes */}
					<Route path="/*" element={<SectionController/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;