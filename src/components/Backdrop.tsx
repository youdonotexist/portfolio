import React, {useRef, useEffect} from 'react';

import cloud1 from "../assets/pixel/bg_cloud1.png";
import cloud2 from "../assets/pixel/bg_cloud2.png";
import cloud3 from "../assets/pixel/bg_cloud3.png";
import cloud5 from "../assets/pixel/bg_cloud5.png";
import cloud6 from "../assets/pixel/bg_cloud6.png";
import cloud7 from "../assets/pixel/bg_cloud7.png";
import cloud8 from "../assets/pixel/bg_cloud8.png";

import sky1 from '../assets/pixel/nightsky/bg0sky.png';
import sky2 from '../assets/pixel/nightsky/bg01.png';
import sky3 from '../assets/pixel/nightsky/bg02.png';
import sky4 from '../assets/pixel/nightsky/bg03.png';
import sky5 from '../assets/pixel/nightsky/bg04.png';
import sky6 from '../assets/pixel/nightsky/bg05.png';

import daysky1 from '../assets/pixel/daysky/bg0sky.png';
import daysky2 from '../assets/pixel/daysky/bg01.png';
import daysky3 from '../assets/pixel/daysky/bg02.png';
import daysky4 from '../assets/pixel/daysky/bg03.png';
import daysky5 from '../assets/pixel/daysky/bg04.png';
import daysky6 from '../assets/pixel/daysky/bg05.png';

import midsky1 from '../assets/pixel/midsky/bg0sky.png';
import midsky2 from '../assets/pixel/midsky/bg01.png';
import midsky3 from '../assets/pixel/midsky/bg02.png';
import midsky4 from '../assets/pixel/midsky/bg03.png';
import midsky5 from '../assets/pixel/midsky/bg04.png';
import midsky6 from '../assets/pixel/midsky/bg05.png';

import {SkySet, SkySetConfig} from "../js/SkySet";
import {
    Application,
    Assets,
    Container,
    Sprite,
    Ticker,
} from "pixi.js";

const backdropConfig:SkySetConfig[] = [
    {
        name: 'night',
        bg : [sky1, sky2, sky3, sky4, sky5, sky6],
        skyColor: 0x36567F,
        groundColor: 0x111B2F,
        emphasisColor: 0xffa902
    },
    {
        name: 'day',
        bg: [daysky1, daysky2, daysky3, daysky4, daysky5, daysky6],
        skyColor: 0xA2B9AC,
        groundColor: 0x5E5C5F,
        emphasisColor: 0x5e5c5f
    },
    {
        name: 'mid',
        bg: [midsky1, midsky2, midsky3, midsky4, midsky5, midsky6],
        skyColor: 0xA4AFDF,
        groundColor: 0x57539F,
        emphasisColor: 0x57539f
    }
]

const Backdrop: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<Application | null>(null);
    let app:Application;

    const resizeObserver = new ResizeObserver(async (entries) => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;

            app.stage.removeChildren();
            Ticker.shared.destroy();
            await init(width, height)
        }
    });

    const init = async (width: number, height:number) => {
        if (canvasRef.current && !appRef.current) {
            app = new Application();
            await app.init({background: '#aaaaaa', resizeTo: window})

            appRef.current = app;

            if (app.canvas.parentNode == canvasRef.current)
                canvasRef.current.removeChild(app.canvas);

            canvasRef.current.appendChild(app.canvas);
            resizeObserver.observe(window.document.body);
        }


        app.stage.addChild(await buildSky(width, height));
    }

    const buildSky = async (width: number, height: number) => {
        const bgContainer = new Container();
        bgContainer.x = 0;
        bgContainer.y = 0;
        bgContainer.width = width;
        bgContainer.height = height;

        const rand = timeOfDay()
        const config = backdropConfig[rand];

        updateHightlight(config.emphasisColor);
        const skySet = new SkySet(bgContainer, config, width, height);
        await skySet.build();

        await addClouds(bgContainer, width);

        return bgContainer;
    };

    const timeOfDay = () => {
        const currentHour = new Date().getHours()
        if (currentHour >= 12 && currentHour <=17) return 2 // afternoon
        else if (currentHour >= 18 || currentHour <= 6) return 0 //night
        else return 1 //morning/midday
    }

    const updateHightlight = (color: number) => {
        const root = document.documentElement;

        const test = "#" + color.toString(16);
        // Update the CSS variable
        root.style.setProperty('--highlight', test);
    }

    useEffect(() => {
        init(window.screen.width, window.screen.height)
            .catch(console.error);

        return () => {
            app.stage.removeChildren();
            Ticker.shared.destroy();
            resizeObserver.disconnect();
        };
    }, []);


    function lerp(start: number, end:number, t:number) {
        return start + (end - start) * t;
    }

    const addClouds = async (container: Container, width: number) => {
        let cloudAssets = [
            await Assets.load(cloud1),
            await Assets.load(cloud2),
            await Assets.load(cloud3),
            await Assets.load(cloud5),
            await Assets.load(cloud6),
            await Assets.load(cloud7),
            await Assets.load(cloud8)];
        const lowWidth = width < 768;
        const lower = lowWidth ? 80 : 170;
        let cloutCount =  lowWidth ? 10 : 20;
        let clouds: Sprite[] = [];

        for(let i = 0; i < cloutCount; i++) {
            const cloudRand = Math.floor(Math.random() * cloudAssets.length);

            const texture = cloudAssets[cloudRand];

            const cloud = new Sprite(texture);
            clouds.push(cloud);
            cloud.x = Math.floor(lerp(0, width, Math.random())) - 100;
            cloud.y = Math.floor(lerp(30, lower, Math.random()));
            cloud.pivot.y = cloud.height;
            cloud.pivot.x = 0;

            container.addChild(cloud);
        }

        let ticker = Ticker.shared;
        ticker.add(function (time) {
            for (let i = 0; i < cloutCount; i++) {
                clouds[i].x += time.deltaTime * 0.2;
                if (clouds[i].x > width) {
                    clouds[i].x = -clouds[i].width;
                }
            }
        });
    };



    return (
        <div
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // Place behind other content
            }}
        ></div>
    );


};

export default Backdrop;