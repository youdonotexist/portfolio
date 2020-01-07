import React from "react";
import Carousel from "nuka-carousel";
import {GameModel, GameViewModel} from "../../viewmodel/GameViewModel";
import {isMobile} from "react-device-detect";
import {RouteChildrenProps} from "react-router";
import {PartialObserver} from "rxjs";

import GithubIcon from "../../assets/github.png";
import TxtIcon from "../../assets/txt.png";

export interface GameProps {
    isModal: boolean;
    id: string;
}

interface GameState {
    game: GameModel;
}

export interface GameMatch {
    game_id: string
}

export class GameComponent extends React.Component<GameProps & RouteChildrenProps<GameMatch>, GameState> {
    public state = {game: GameViewModel.emptyGame()};

    private viewModel: GameViewModel;
    private carouselRef: React.RefObject<Carousel> = React.createRef();

    constructor(props) {
        super(props);

        this.viewModel = new GameViewModel();
        this.handleLoadImage.bind(this);
    }

    public componentDidMount() {
        const hasGameId: string = this.props.match ? this.props.match.params.game_id : "";
        const id: string = this.props.id || hasGameId;

        const stream = this.viewModel.getData(id);

        const observer: PartialObserver<GameModel> = {
            next: (game: GameModel) => {
                this.setState({game})
            }
        };

        stream.subscribe(observer);
    }

    public render() {
        return (
            <div className={this.props.isModal ? "Game-Modal" : "Game"}>
                <h3>{this.state.game.title}</h3>
                {this.showCarousel(this.state.game.images)}
                <div className="Game-Links">
                    <a style={{display: 'inline-block'}} target='_blank' href={this.state.game.readme}>
                        <img className="Game-Icon" src={TxtIcon} alt="Readme"/>
                        <div style={{display: 'block'}}>Readme</div>
                    </a>
                    <a style={{display: 'inline-block'}} target='_blank' href={this.state.game.source}>
                        <img className="Game-Icon" src={GithubIcon} alt="Source"/>
                        <div style={{display: 'block'}}>Source</div>
                    </a>
                </div>
            </div>
        );
    }

    private handleLoadImage() {
        if (this.carouselRef.current) {
            // @ts-ignore
            this.carouselRef.current.setDimensions();
        }
    }

    private showCarousel(hasImages) {
        const game: GameModel = this.state.game;
        if (hasImages && hasImages.length > 0) {
            return <Carousel className='Game-Carousel' ref={this.carouselRef} heightMode='max'
                             withoutControls={isMobile}>
                {game.images.map((image, index) => {
                    return <img className={"WorkImage"} src={image} key={index} onLoad={this.handleLoadImage.bind(this)}
                                alt={"game shot"}/>
                })}
            </Carousel>
        } else {
            return <div/>;
        }
    }
}
