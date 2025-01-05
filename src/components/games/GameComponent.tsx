import React, {useEffect, useState, useCallback, useRef} from "react";
import { GameModel, GameViewModel } from "../../viewmodel/GameViewModel";
import { useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
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

            const children = parentRef.current.querySelector('#nuka-wrapper')?.children || [];
            const offsets = Array.from(children).map(
                (child) => (child as HTMLElement).offsetWidth,
            );

            const scrollWidth = parentRef.current.scrollWidth;
            const visibleWidth = parentRef.current.offsetWidth;
            const remainder = scrollWidth - visibleWidth;

            //debugger;
            // shift the scroll offsets by one to account for the first slide
            //const scrollOffsets = arraySum([0, ...offsets.slice(0, -1)]);

            // find the index of the scroll offset that is greater than
            // the remainder of the full width and window width
            //const pageCount =
            //    scrollOffsets.findIndex((offset) => offset >= remainder) + 1;
        }

        if (!game.title) {
            const stream = viewModel.getData(game_id || "");
            stream.subscribe(observer);
        }

        return () => {
            resizeObserver.disconnect();
        }//subscription?.unsubscribe(); // Clean up on unmount
    }, [game_id, viewModel]);

    // Handle image load (no-op for now, but kept for parity with the original)
    const handleLoadImage = useCallback(() => {
        // Example logic for post-load adjustments can be added here
    }, []);


    // Render carousel with images
    const showCarousel = (hasImages: string[]) => {
        if (hasImages && hasImages.length > 0) {
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
                            <div
                                style={{
                                    alignContent: "center",
                                    width: `${parentWidth}px`,
                                    position: "relative"
                                }}>
                            <img
                                key={index}
                                width={parentWidth}
                                className="WorkImage"
                                src={image}
                                alt="game shot"
                                onLoad={handleLoadImage}
                            />
                            </div>
                        ))}
                        {showYoutube(game.video)}
                    </Carousel>
                </div>
            );
        } else {
            return <div/>;
        }
    };

    // Render YouTube embed
    const showYoutube = (videoUrl: string) => {
        return videoUrl ? <YouTubeEmbed
            videoId={videoUrl}
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