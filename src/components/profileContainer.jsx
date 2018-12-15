import React, { Component } from 'react';
import '../App.css'
import '../w3css.css';

class profileContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            profileImg: ""
        }
    }

    handleSubmit = () =>{

    }
    render() {

        const img = null;
        return (
            <div className="profileContainer">
                <form>
                    <div style={{width: '30%', margin: 'auto'}}>
                        <img src={this.state.profileImg}/>
                        <br/>
                        <button className="w3-button w3-blue w3-round-xlarge">Cambiar imagen de perfil</button>
                        <br/>
                        <br/>
                        Nuevo correo: <input type="text" className="w3-input" />
                        <br/>
                        <br/>
                        Nueva contraseña: <input type="password" className="w3-input" />
                        <br/>
                        <br/>
                        Nuevo nombre de usuario: <input type="text" className="w3-input" />
                        <br/>
                        <br/>
                        <button className="w3-button w3-blue w3-round-xlarge">Aceptar</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default profileContainer;