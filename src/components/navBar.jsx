import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import PopUpLogIn from './popUpLogIn';
import PopUpSignIn from './popUpSignIn'
import '../w3css.css';


class navBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogIn: false,
            showSignIn: false
        }
    }

    handleOpenL = () => {
        this.setState({ showLogIn: true });
    };

    handleCloseL = () => {
        this.setState({ showLogIn: false });
    };
    handleOpenS = () => {
        this.setState({ showSignIn: true });
    };

    handleCloseS = () => {
        this.setState({ showSignIn: false });
    };

    isLogged = () => {
        if (this.props.isLogged) {
            return (
                <ul className="w3-bar w3-teal">
                    <Link to="/productos" className="w3-bar-item w3-button"><h3>Comidas</h3></Link>
                    <Link to="/usuarios" className="w3-bar-item w3-button"><h3>Usuarios</h3></Link>
                    <Link to="/publicar" className="w3-bar-item w3-button"><h3>Publicar</h3></Link>
                    <Link to="/chats" className="w3-bar-item w3-button"><h3>Chats</h3></Link>

                    <div className="w3-dropdown-hover w3-right">
                        <button className="w3-button"><h3>Perfil</h3></button>
                        <div className="w3-dropdown-content w3-bar-block w3-border" style={{right: '0'}}>
                            <Link to="/perfil" className="w3-bar-item w3-button"><h4>Ajustes</h4></Link>
                            <Link to="/" className="w3-bar-item w3-button" onClick={this.props.logOut}><h4>Cerrar sesión</h4></Link>
                        </div>
                    </div>
                </ul>


            )
        } else {
            return (
                <ul className="w3-bar w3-grey">
                    <button className="w3-bar-item w3-button" onClick={this.handleOpenS} >Registarse</button>
                    {this.state.showSignIn ? <PopUpSignIn open={this.state.showSignIn} onClose={this.handleCloseS}/> : null}
                    <button style={{ float: 'right' }} className="w3-bar-item w3-button" onClick={this.handleOpenL}>Iniciar sesión</button>
                    {this.state.showLogIn ? <PopUpLogIn open={this.state.showLogIn} onClose={this.handleCloseL} LogIn={this.props.LogIn}/> : null}
                </ul>
            )
        }
    }

    render() {
        return this.isLogged()
    }
}

export default navBar;