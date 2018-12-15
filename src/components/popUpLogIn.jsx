import React from 'react';
import Modal from 'react-responsive-modal';

export default class popUpLogIn extends React.Component {

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

        if (!document.getElementById("password").value) {
            this.setState({
                nullData: true
            })
            send = false
        }

        if (send) {
            this.props.onClose()
            alert('¡Logeado!')
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>

                    <hr />
                    <div className="frame-father-signin" >
                        <div className="frame">
                            <h3>E-mail:</h3>
                            <input type="text" id="email" />

                        </div>
                        <div className="frame">
                            <h3>Contraseña:</h3>
                            <input type="password" id="password" />
                        </div>
                    </div>
                    <div>
                        <button style={{ float: 'right' }} className="w3-button w3-blue w3-round-xlarge" type="submit" onClick={this.handleSubmit}>Aceptar</button>
                    </div>
                    {this.state.nullData ? <h3>LogIn incorrecto</h3> : null}
                </Modal>
            </form>
        );
    }
}

