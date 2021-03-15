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
		this.languages.forEach( (value) => this.state.favCount[value] = 0)
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
						this.languages.map( item => <LanguageBar language={item} favCount={this.state.favCount[item]} lastVote={this.updateLastVoted} totalCount={this.incrementTotalFavCounter}/>)
					}
				</div>
			</div>
		);
	}
}
export default Voting;