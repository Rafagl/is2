import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../App.css'


class popUpChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id
            // contenido
            // fecha
            // id usuario que lo manda
            // id del chat al que pertenece
            mensajes: [{
                id: "",
                contenido: "",
                fecha: "",
                usuario: "",
                idchat: ""
            }]
        };
    }

    renderMessages = () => {

        this.state.mensajes.map(mensaje => {
            if (mensaje.usuario === this.props.usuario) {
                return (
                    <div style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container ">
                        <div className="w3-gray w3-round-large" style={{ width: 'auto', 'max-width': '60%', height: 'auto', padding: '10px', margin: '10px', 'word-wrap': 'normal', float: 'right' }}>
                            {mensaje.contenido}
                        </div>
                    </div>
                )
            } else {
                return (
                    <div style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container">
                        <div className="w3-gray w3-round-large" style={{ width: 'auto', 'max-width': '60%', height: 'auto', padding: '10px', margin: '10px', 'word-wrap': 'normal', float: 'left' }}>
                            {mensaje.contenido}
                        </div>
                    </div>
                )
            }
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>
                    <div style={{ width: '30em', height: '40em', position: 'relative' }}>
                        <h3 style={{ float: 'center' }}>Chat 1</h3>
                        <hr />
                        <div style={{ width: '100%', height: '70%', overflow: 'auto', 'scroll-snap-coordinate': '100%' }} className="w3-light-gray w3-round-large">
                            {/* <div style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container ">
                                <div className="w3-gray w3-round-large" style={{ width: 'auto', 'max-width': '60%', height: 'auto', padding: '10px', margin: '10px', 'word-wrap': 'normal', float: 'right' }}>
                                    laslhaslhsjr se sjd isdsjd iseijd isej sei
                                </div>
                            </div>
                            <div style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container">
                                <div className="w3-gray w3-round-large" style={{ width: 'auto', 'max-width': '60%', height: 'auto', padding: '10px', margin: '10px', 'word-wrap': 'normal', float: 'left' }}>
                                    jsbjbjds s lddlsj sdl sdlj sldj hsldjh lsdh ljsdh lsdhj lsdl hsjldh ljdshjl hsdj hsld
                                </div>
                            </div> */}
                            {this.renderMessages()}
                        </div>
                        <div style={{ width: '100%', height: '15%', position: 'absolute', bottom: '0' }}>
                            <textarea className="w3-round-large" style={{ width: '80%', height: '100%' }} />
                            <button className="w3-button w3-blue w3-round-large" style={{ width: '20%', height: '100%', position: 'absolute' }}>Enviar</button>
                        </div>
                    </div>
                </Modal>
            </form>
        );
    }
}

    export default popUpChat;