import React, { Component } from 'react';
import Chat from './chat'

class chats extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        //@TODO: hacer get de todos los chats
    }
    render() {
        return (
            <div className="food-grid-container">
                <div className="food-grid">
                        <Chat usuario={this.props.usuario}></Chat>
                        {//@TODO: pasarle a cada chat su nombreo id en su defecto
                        }
                </div>
            </div>
        );
    }
}

export default chats;