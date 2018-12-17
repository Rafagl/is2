import React from 'react';
import Modal from 'react-responsive-modal';

export default class popUpSignIn extends React.Component {

    state = {
        nullData: false
    }

    handleSubmit = () => {

        let send = true;

        if (!document.getElementById("email").value) {
            this.setState({
                nullData: true
            })
            send = false
        }

        if (!document.getElementById("name").value) {
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
        let location = "";
        if (!document.getElementById("checkbox1").checked) {
            if(!document.getElementById("checkbox2").checked){
                this.setState({
                    nullData: true
                })
                send = false
            }else{
                location = "Madrid"
            }
        }else{
            console.log(!document.getElementById("checkbox1").value)
            location = "Barcelona"
        }

        if (send) {
            var url = 'http://localhost:8080/MiComida/api/usuarios';
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                  contrasena: document.getElementById('password').value,
                  nombre_completo: document.getElementById('name').value,
                  correo: document.getElementById('email').value,
                  localizacion: location,
                  ciudad: 'Madrid',
                  foto: null
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
             }).then((response) => {
                console.log(response.json);
                alert('¡Registrado correctamente!')
            }).catch(err => {console.log(err);});
        }
        this.props.onClose()
        console.log(location)

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>
                    <div className="w3-panel w3-bottombar w3-topbar w3-border-blue w3-padding-large" style={{marginTop: '35px'}} >
                        <div className="w3-panel  w3-padding-12 w3-round-large" >
                            <h3>Nombre completo: </h3>
                            <input type="text" id="name" className="w3-input w3-border w3-round-large w3-margin-bottom	" />
                        </div>
                        <div className="w3-panel w3-padding-12 w3-round-large">
                            <h3>E-mail:</h3>
                            <input type="text" id="email" className="w3-input w3-border w3-round-large w3-margin-bottom	" />

                        </div>
                        <div className="w3-panel w3-padding-12 w3-round-large">
                            <h3>Contraseña:</h3>
                            <input type="password" id="password" className="w3-input w3-border w3-round-large w3-margin-bottom	"/>

                        </div>
                        <div className="w3-panel  w3-padding-24 w3-round-large">
                            <label className="container" >Barcelona
                                <input type="checkbox" id="checkbox1" className="w3-input w3-margin	" style={{margin: '35px'}}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Madrid
                                <input type="checkbox" id="checkbox2" className="w3-input w3-margin	" style={{margin: '35px'}} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button style={{ float: 'right' }} className="w3-button w3-blue w3-round-xlarge" type="submit" onClick={this.handleSubmit}>Aceptar</button>
                    </div>
                    {this.state.nullData ? <h3>Todos los campos han de completarse</h3> : null}
                </Modal>
            </form>
        );
    }
}

