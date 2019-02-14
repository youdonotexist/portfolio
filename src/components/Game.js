import React, {Component} from 'react';
import Carousel from "nuka-carousel";
import GameViewModel from "../viewmodel/GameViewModel";
import GithubIcon from "../assets/github.png";
import TxtIcon from "../assets/txt.png";

class Game extends Component {
	constructor(props) {
		super(props);

		this.viewModel = new GameViewModel();

		this.state = {
			game: {
				images: []
			}
		};

		this.handleLoadImage = this.handleLoadImage.bind(this);
	}

	componentDidMount() {
		var id = this.props.id || this.props.match.params.game_id;

		this.viewModel.getData(id).subscribe((game) => {
			this.setState({game: game});
		});
	}

	handleLoadImage() {
		this.refs.carousel.setDimensions();
	}

	render() {

		return (
			<div className={this.props.isModal ? "Game-Modal" : "Game"}>
				<h1>{this.state.game.title}</h1>
				{this.showCarousel(this.state.game.images)}
				<div >
					<a style={{display: 'inline-block', padding: '5px'}} target='_blank' href={this.state.game.readme}>
						<img className="Game-Icon" src={TxtIcon} alt="Readme"/>
						<div style={{display: 'block'}}>Readme</div>
					</a>
					<a style={{display: 'inline-block', padding: '5px'}} target='_blank' href={this.state.game.readme}>
						<img className="Game-Icon" src={GithubIcon} alt="Source"/>
						<div style={{display: 'block'}}>Source</div>
					</a>
				</div>
			</div>
		);
	}

	showCarousel(hasImages) {
		var self = this;

		if (hasImages) {
			return <Carousel className='Game-Carousel' ref={"carousel"} heightMode='max'>
				{this.state.game.images.map(function (image, index) {
					return <img style={{height: 'auto', width: '100%'}} key={index} src={image}
					            onLoad={self.handleLoadImage} alt="game image"/>
				})}
			</Carousel>
		}
		else {
			return <div/>;
		}
	}
}

Game.propTypes = {};

export default Game;
