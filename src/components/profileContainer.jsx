import React, { Component } from 'react';
import '../App.css'
import '../w3css.css';

class profileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileImg: ""
        }
    }

    handleSubmit = () => {
        var url = 'http://localhost:8080/MiComida/api/usuarios/' + this.props.usuario;
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                correo: document.getElementById("email").value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.json);
        }).catch(err => { console.log(err); });
    }
    render() {
        const img = null;
        return (
            <div className="w3-panel w3-round-large w3-topbar w3-bottombar w3-border-blue w3-light-gray w3-padding" style={{ marginTop: '2%', margin: 'auto', width: '60%' }}>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ width: '30%', margin: 'auto' }} >
                        <img src={this.state.profileImg} />

                        <button className="w3-button w3-blue w3-round-xlarge">Cambiar imagen de <br />perfil</button>

                        <h3>Nuevo correo: </h3><input id="email" type="text" className="w3-input w3-round" />

                        <h3> Nueva contraseña: </h3><input type="password" className="w3-input w3-round" />

                        <h3> Nuevo nombre de usuario:</h3> <input type="text" className="w3-input w3-round" />

                        <h3> Localización: </h3>

                        <label className="container" >Barcelona
                                <input type="checkbox" id="checkbox1" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Madrid
                                <input type="checkbox" id="checkbox2" />
                            <span className="checkmark"></span>
                        </label>

                        <button onClick={this.handleSubmit} className="w3-button w3-blue w3-round-xlarge">Aceptar</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default profileContainer;