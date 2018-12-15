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
            (async () => {
                const rawResponse = await fetch(/*'https://localhost:8080/MiComida/api/usuarios*/ 'https://jsonplaceholder.typicode.com/posts', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      contrasena: document.getElementById("password").value,
                      nombre_completo: document.getElementById("name").value,
                      correo: document.getElementById("email").value,
                      localizacion: location,
                      ciudad: "Madrid"
                    })
                });
                const content = await rawResponse.json();
                console.log(content.status);
              })();

        }

        console.log(location)

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>
                    <hr />
                    <div className="frame-father-signin" >
                        <div className="frame" >
                            <h3>Nombre de usuario: </h3>
                            <input type="text" id="name" />
                        </div>
                        <div className="frame">
                            <h3>E-mail:</h3>
                            <input type="text" id="email" />

                        </div>
                        <div className="frame">
                            <h3>Contraseña:</h3>
                            <input type="password" id="password" />

                        </div>
                        <div className="frame">
                            <label className="container" >Barcelona
                                <input type="checkbox" id="checkbox1"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Madrid
                                <input type="checkbox" id="checkbox2" />
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

