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
			favCount: {}
		}
		this.languages.forEach( (value) => this.state.favCount[value] = 0)		 
	}

	render(){
		return(
			<div className="votingContainer">
				<div className="votingContainerTitle">
					vote for one of {this.languages.length} languages
				</div>
				<div className="languageContainer">
					{
						this.languages.map( item => <LanguageBar language={item} favCount={this.state.favCount[item]} />)
					}
				</div>
			</div>
		);
	}
}
export default Voting;