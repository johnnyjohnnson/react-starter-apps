import React, { Component } from 'react';
import '../style/LanguageBar.css';


class LanguageBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favCount: props.favCount,
            language: props.language,
        }
    }

    upVote = (event) => {
        this.setState({favCount: this.state.favCount + 1});
        this.props.lastVote(this.state.language);
        this.props.totalCount();
    }

    render() {
        return (
            <div className="languageBar">
                <div className="favCount">{this.state.favCount}</div>
                <div className="language">{this.state.language}</div>
                <div className="upVote">
                    <button className="upVoteButton" onClick={this.upVote}>vote ⚡</button>
                </div>
            </div>
        )
    }
}


export default LanguageBar;