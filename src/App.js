import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import FoodContainer from './components/foodContainer';
import NavBar from './components/navBar';
import userContainer from './components/userContainer';
import ProfileContainer from './components/profileContainer'
import Publish from './components/publish'
import Chats from './components/chats'

class App extends Component {

    state = {
        user: "1",
        isLogged : true
    }

    logIn = (usuario) =>{
        this.setState({
            user: usuario,
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
                                <Route exact path="/productos" render={()=><FoodContainer usuario={this.state.user}/>} />
                                <Route exact path="/perfil" render={()=><ProfileContainer usuario={this.state.user}/>}/>
                                <Route exact path="/publicar" render={()=><Publish usuario={this.state.user}/>}/>
                                <Route exact path="/chats" render={()=><Chats usuario={this.state.user}/>}/>
                            </div>
                        </div>
                    </Router>
                </div>
            )
        }else{
            return (
                <div className="App">
                    <NavBar isLogged = {this.state.isLogged} logIn={this.logIn} usuario={this.state.user}/>
                </div>
            )
        }
    }

    render() {
        return this.isLogged()
    }
}

export default App;
