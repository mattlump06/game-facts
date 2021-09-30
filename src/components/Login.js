import React from 'react';
import ReactDom from 'react-dom';
import Game from './Game';

class ShowGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'letsplay',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render(){
        let login = (
            <form action="#" onSubmit={this.authorize}>
                <input type= "password"></input>
                <input type= "submit"></input>
            </form>
        )

        const show_games = (
            <Game/>
        )

        return(
            <div id="authorization">
                <h1>{this.state.authorized ? 'Games Showcase' : 'Enter the Passphrase'}</h1>
                {this.state.authorized ? show_games : login}
            </div>
        );
    }
}

/*ReactDom.render(
    <Game/>, document.getElementById('app')
);*/
export default ShowGames
