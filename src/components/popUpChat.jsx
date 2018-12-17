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
            mensajes: null
        };
    }

    componentWillMount(){
        var url = 'http://localhost:8080/MiComida/api/usuarios/' + this.props.usuario + '/chats/'+ this.props.chat.id_chat;
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        }).then((response) => {
            return response.json();
        }).then((objeto) => {
            this.setState({
                mensajes: objeto.mensajes
            });
        }).catch(err => {console.log(err);});
    }

    renderMessages = () => {
        if(this.state.mensajes !== null){
        console.log('El mensaje no es nulo');

        return (this.state.mensajes.map((mensaje,i) => {
            console.log('mapenado mensajes');
            if (mensaje.id_usuario === this.props.usuario) {
            console.log('el mensaje es tuyo')
                return (
                <div key={i} style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container">
                        <div className="w3-gray w3-round-large" style={{ width: 'auto', 'maxWidth': '60%', height: 'auto', padding: '10px', margin: '10px', 'wordWrap': 'normal', float: 'right' }}>
                            {mensaje.contenido}
                        </div>
                    </div>
                )
            } else {
            console.log('el mensaje es suyo')
                return (
                    <div key={i} style={{ width: '100%', position: 'relative', display: 'block' }} className="w3-container">
                        <div className="w3-gray w3-round-large" style={{ width: 'auto', 'maxWidth': '60%', height: 'auto', padding: '10px', margin: '10px', 'wordWrap': 'normal', float: 'left' }}>
                            {mensaje.contenido}
                        </div>
                    </div>
                )
            }
            }));
        }
        else{return (<div/>)}


    }

    handleSubmit = () =>{
        let msg = document.getElementById("msg").value;

        var url = 'http://localhost:8080/MiComida/api/usuarios/' + this.props.usuario + '/chats/'+ this.props.chat.id_chat;
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
              contenido: msg,
              id_usuario: this.props.usuario,
              id_chat: this.props.chat.id_chat
          }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.json);
        }).catch(err => {console.log(err);});

        this.setState((state) => {
            mensajes: state.mensajes.push({
            contenido: msg,
              id_usuario: this.props.usuario,
              id_chat: this.props.chat.id_chat
            })
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal open={this.props.open} onClose={this.props.onClose} center>
                    <div style={{ width: '30em', height: '40em', position: 'relative' }}>
                        <h3 style={{ float: 'center' }}>Chat 1</h3>
                        <hr />
                        <div style={{ width: '100%', height: '70%', overflow: 'auto'}} className="w3-light-gray w3-round-large">
                            {this.renderMessages()}
                        </div>
                        <div style={{ width: '100%', height: '15%', position: 'absolute', bottom: '0' }}>
                            <textarea id="msg" className="w3-round-large" style={{ width: '80%', height: '100%' }} />
                            <button className="w3-button w3-blue w3-round-large" style={{ width: '20%', height: '100%', position: 'absolute' }} onClick={this.handleSubmit}>Enviar</button>
                        </div>
                    </div>
                </Modal>
            </form>
        );
    }
}

    export default popUpChat;