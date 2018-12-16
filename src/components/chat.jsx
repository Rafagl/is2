import React, { Component } from 'react';
import PopUpChat from './popUpChat'

class chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false
        };
    }

    handleClose = () => {
        this.setState({ showPopUp: false })
    }

    handleOpen = () => {
        this.setState({ showPopUp: true })
    }

    render() {
        return (
            <div>
                <div className="food-container w3-teal" onClick={this.handleOpen}>hola</div>
                {//@TODO: pasarle cada pop up su chat para que haga get o pasarke directamente el contenido
                }
                <PopUpChat open={this.state.showPopUp} onClose={this.handleClose} usuario={this.props.usuario}/>
            </div>
        );
    }
}

export default chat;