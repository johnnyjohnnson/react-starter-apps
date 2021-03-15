import React,{Component} from 'react';
import '../style/Voting.css';
import LanguageBar from './LanguageBar';


class Voting extends Component{
	constructor(props){
		super(props);
		this.languages = [
			"JavaScript", "Python", "Go", "Java", "Typescript", "Ruby", "Elixir"
		]
		this.state = {
			favCount: {},
			totalFavCount: 0,
			lastVote: "none"
		}
		this.languages.forEach( (lang) => {
			this.setState({favCount: Object.assign(this.state.favCount, {[lang]: 0})});
			this.setState({totalFavCount: this.state.totalFavCount + this.state.favCount[lang]});
		})
	}

	incrementTotalFavCounter = () => {
		this.setState({totalFavCount: this.state.totalFavCount + 1})
	}

	updateLastVoted = (param) => {
		this.setState({lastVote: param})
	}

	render(){
		return(
			<div className="votingContainer">
				<div className="votingContainerTitle">
					vote for one of {this.languages.length} languages
				</div>
				<div>
					this is the total count: {this.state.totalFavCount}
				</div>
				<div>
					this was the last vote: {this.state.lastVote}
				</div>
				<div className="languageContainer">
					{
						this.languages.map( item => <LanguageBar language={item} favCounter={this.state.favCount[item]} lastVoted={this.updateLastVoted} totalCounter={this.incrementTotalFavCounter}/>)
					}
				</div>
			</div>
		);
	}
}
export default Voting;