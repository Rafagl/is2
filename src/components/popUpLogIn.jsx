import React from 'react';
import Modal from 'react-responsive-modal';

export default class popUpLogIn extends React.Component {

    state = {
        nullData: false
    }

    handleSubmit = e => {
        e.preventDefault();
        let send = true;

        if (!document.getElementById("email").value) {
            this.setState({
                nullData: true
            })
            send = false
        }

        if (!document.getElementById("password").value) {
            this.setState({
                nullData: true
            })
            send = false
        }

        if (send) {
            this.props.onClose()
            var url = 'http://localhost:8080/MiComida/api/sesion';
            var queryparams = '?correo=' + document.getElementById("email").value + '&contrasena=' +
                document.getElementById("password").value;
            console.log('hola');
            fetch(url + queryparams, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((objeto) => {
                if (objeto.id_usuario !== null)
                    this.props.logIn(objeto.id_usuario)
            }).catch(err => { console.log(err); });
        }
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>
                    <div className="w3-panel w3-bottombar w3-topbar w3-border-blue w3-padding-large" style={{marginTop: '35px'}}>
                        <div className="w3-panel  w3-padding-12 w3-round-large">
                            <h3>E-mail:</h3>
                            <input type="text" id="email" className="w3-input w3-border w3-round-large w3-margin-bottom	" />

                        </div>
                        <div className="w3-panel  w3-padding-12 w3-round-large">
                            <h3>Contraseña:</h3>
                            <input type="password" id="password" className="w3-input w3-border w3-round-large w3-margin-bottom" />
                        </div>
                    </div>
                    <form>
                        <button style={{ float: 'right', margin: '5px' }} className="w3-button w3-blue w3-round-xlarge" type="submit">Aceptar</button>
                    </form>
                    {this.state.nullData ? <h3>LogIn incorrecto</h3> : null}
                </Modal>
            </form>
        );
    }
}

