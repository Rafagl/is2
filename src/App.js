import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import foodContainer from './components/foodContainer';
import NavBar from './components/navBar';
import userContainer from './components/userContainer';
import profileContainer from './components/profileContainer'
import publish from './components/publish'
import chats from './components/chats'

class App extends Component {

    state = {
        user: "",
        isLogged : true
    }

    logIn = (usuario) =>{
        this.setState({
            user: usuario.id,
            isLogged: true
        })
    }
    logOut = () =>{
        this.setState({
            user: "",
            isLogged: false
        })
    }
    isLogged = () => {
        if (this.state.isLogged) {
            return (
                <div className="App">
                    <Router>
                        <div>
                            <NavBar isLogged={this.state.isLogged} LogIn={this.logIn} logOut={this.logOut}/>
                            <div>
                                <Route exact path="/" />
                                <Route exact path="/usuarios" component={userContainer} />
                                <Route exact path="/productos" component={foodContainer} />
                                <Route exact path="/perfil" component={profileContainer} />
                                <Route exact path="/publicar" component={publish} />
                                <Route exact path="/chats" component={chats} usuario={this.state.user} />


                            </div>
                        </div>
                    </Router>
                </div>
            )
        }else{
            return (
                <div className="App">
                    <NavBar isLogged = {this.state.isLogged}/>
                </div>
            )
        }
    }

    render() {
        return this.isLogged()
    }
}

export default App;
