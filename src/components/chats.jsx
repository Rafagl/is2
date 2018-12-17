import React, { Component } from 'react';
import Chat from './chat'
import '../App.css'

class chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: null,
            indice: null,
            mensajes: null
        };
    }

    componentWillMount() {
        console.log(this.props.usuario);
        var url = 'http://localhost:8080/MiComida/api/usuarios/' + this.props.usuario + '/chats';
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        }).then((response) => {
            return response.json();
        }).then((objeto) => {
            console.log(objeto.chats);
            this.setState({
                chats: objeto.chats
            });
        }).catch(err => { console.log(err); });
    }

    renderMessages = i => {
        if(this.state.mensajes !== null){
        console.log('El mensaje no es nulo');
        
        this.setState({
            mensajes: this.state.chat[i].mensajes,
            indice: i
        })

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

    renderChats = () => {
        if(this.state.chats !== null){
            return this.state.chats.map((chat,i) =>{
                return (
                    <div key={i} className="chatShow w3-light-gray w3-round-large w3-padding" onClick={()=>this.renderMessages(i)}>
                        <h4> chat.vendedor <br/> chat.producto</h4>
                    </div>
                )
            })
        }
    }

    handleSend = () => {
        //@TODO: enviar mensaje al backend
    }


    render() {
        if (this.state.chats !== null) {
            return (
                // <div className="food-grid-container">
                //     <div className="food-grid">
                //             { this.state.chats.map((chat, i) => {
                //                 return (<Chat key={i} chat={chat} usuario={this.props.usuario}> {chat.id_chat} </Chat>)
                //             })
                //             }
                //             {//@TODO: pasarle a cada chat su nombreo id en su defecto
                //             }
                //     </div>
                // </div>

                <h1>a</h1>
            );
        }
        else return (
            <div className="chatContainer center">
                <div className="w3-teal w3-round-large chatsShow" >
                    {this.renderChats()}
                </div>
                <div className="w3-light-gray w3-round-large ">
                    {this.renderMessages}

                </div>
                <div className="">
                </div>
                <div className="w3-light-gray w3-topbar w3-round-large">
                    <input type="text" id="msg" className="w3-round-large textAreaChat w3-border" />
                    <button className="w3-blue w3-round-large w3-btn sendButton" onClick={this.handleSend}>Enviar</button>
                </div>
            </div>
        );
    }
}

export default chats;