import React, {Component} from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.formatTimeString()
        }
    }

    formatTimeString = () => {
        return new Date().toTimeString().substr(0, 8)
    }

    updateTimeState = () => this.setState({time: this.formatTimeString()})

    componentDidMount() {
        setInterval( () => this.updateTimeState(), 1000);
    }

    render() {
        return (
            <header className="header">
                a header with timeString: {this.state.time}
            </header>
        )
        
    }
}


export default Header;