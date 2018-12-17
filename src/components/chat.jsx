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
                <div className="food-container w3-teal" onClick={this.handleOpen}>Chat:{this.props.chat.id_chat} - Producto: {this.props.chat.id_producto}</div>
                {//@TODO: pasarle cada pop up su chat para que haga get o pasarke directamente el contenido
                }
                <PopUpChat open={this.state.showPopUp} chat={this.props.chat} onClose={this.handleClose} usuario={this.props.usuario} abrir={this.handleOpen} cerrar={this.handleClose}/>
            </div>
        );
    }
}

export default chat;