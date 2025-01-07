import React, {useEffect, useState, useCallback, useRef} from "react";
import { GameModel, GameViewModel } from "../../viewmodel/GameViewModel";
import { useParams } from "react-router-dom";
import {PartialObserver, Subscription} from "rxjs";
import YouTubeEmbed from "./YouTube";

import GithubIcon from "../../assets/github.png";
import TxtIcon from "../../assets/txt.png";
import {Carousel, SlideHandle} from "nuka-carousel";

export interface GameProps {
    isModal: boolean;
}

interface GameState {
    game: GameModel;
}

export interface GameMatch extends Record<string, string>{
    game_id: string;
}

const GameComponent: React.FC<GameProps> = ({ isModal }) => {
    const parentRef = useRef<HTMLDivElement | null>(null); // Reference to parent container
    const slideRef = useRef<SlideHandle>(null);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const [parentHeight, setParentHeight] = useState<number>(0);
    const [game, setGame] = useState<GameModel>(GameViewModel.emptyGame());
    const [slideWidth, setSlideWidth] = useState(window.innerWidth);

    const values = useParams<GameMatch>();
    const game_id: string | undefined = values['*']?.split("/")[1];

    const viewModel = new GameViewModel();

    const observer: PartialObserver<GameModel> = {
        next: (gameData: GameModel) => {
            setGame(gameData);
        },
    };

    // Load game data on mount
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setParentWidth(entry.contentRect.width);
                setParentHeight(entry.contentRect.height);// Update parent width dynamically
            }
        });

        if (parentRef.current) {
            resizeObserver.observe(parentRef.current);
        }

        if (!game.title) {
            const stream = viewModel.getData(game_id || "");
            stream.subscribe(observer);
        }

        return () => {
            resizeObserver.disconnect();
        }//subscription?.unsubscribe(); // Clean up on unmount
    }, [game_id, viewModel]);



    function showImage(image: string, parentWidth: number, index: number) {

        return (<div
                style={{
                    alignContent: "center",
                    width: `${parentWidth}px`,
                    height: "100%",
                    position: "relative",
                    backgroundColor: "black",
                }}>
                        <img
                            key={index}
                            width={parentWidth}
                            style={{
                                top: "0",
                                left: "0",
                                width: `${parentWidth}px`,
                            }}
                            src={image}
                            alt="game shot"
                        />
        </div>);
    }

    // Render carousel with images
    const showCarousel = (hasImages: string[]) => {
        //if (hasImages && hasImages.length > 0) {
            return (
                <div ref={parentRef} style={{width: "100%", maxWidth: "600px", margin: "0 auto"}}>
                    <Carousel
                        ref={slideRef}
                        scrollDistance={"slide"}
                        showArrows={true}
                        showDots={true}
                        wrapMode={"wrap"}
                    >
                        {game.images.map((image, index) => (
                            showImage(image, parentWidth, index)
                        ))}
                        {game.videos.map((video, index) => (
                            showYoutubeVideo(video)
                        ))}
                        {showYoutubeVideo(game.playlistId)}
                    </Carousel>
                </div>
            );
        //}
    };

    // Render YouTube embed
    const showYoutubeVideo = (youtubeId: string) => {
        return youtubeId ? <YouTubeEmbed
            videoId={youtubeId}
            width={parentWidth.toString()}
            height={parentHeight.toString()} /> : "";
    };

    return (
        <div className={isModal ? "Game-Modal" : "Game"}>
            <h3>{game.title}</h3>
            {showCarousel(game.images)}
            <div className="Game-Links">
                <a
                    style={{ display: "inline-block" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={game.readme}
                >
                    <img className="Game-Icon" src={TxtIcon} alt="Readme" />
                    <div style={{ display: "block" }}>Readme</div>
                </a>
                <a
                    style={{ display: "inline-block" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={game.source}
                >
                    <img className="Game-Icon" src={GithubIcon} alt="Source" />
                    <div style={{ display: "block" }}>Source</div>
                </a>
            </div>
        </div>
    );
};

export default GameComponent;