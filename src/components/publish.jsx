import React, { Component } from 'react';
import PopUpFood from './popUpFood';
import { createBrowserHistory } from 'history';


class publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopUp: false,
            data: [
                [],
                [],
                [],
                ""
            ]
        };
    }

    handleClose = () => {
        this.setState({
            showPopUp: false,
            data: [
                [],
                [],
                [],
                ""
            ]
        })

        console.log("holaaaaa")
    }

    handleOpen = () => {
        this.setState({
            showPopUp: true
        })
        console.log(this.state.showPopUp)
    }

    handleChange = (campo, item) => {

        let exit = false;

        this.state.data[campo].map(ob => {
            if (ob === item) {
                exit = true
                this.setState({
                    [this.state.data[campo]]: this.state.data[campo].pop(item)
                })
            }
        })

        if (!exit) {
            this.setState({
                [this.state.data[campo]]: this.state.data[campo].push(item)
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            data: [
                [],
                [],
                [],
                ""
            ]
        })

        // @TODO: enviar modificacion de usuario 
        console.log("adss");
        this.props.history.push("/usuarios");

    }

    render() {
        return (
            <div>
                <div className="profileContainer w3-round-large">
                    <form onSubmit={this.handleSubmit} style={{width: '60%', margin: 'auto'}}>
                        Nombre:<input type="text" className="w3-input w3-round" id="name" />
                        <br />
                        <br />
                        Imagen:<input type="file" className="w3-input w3-round w3-auto" id="image" />
                        <br />
                        <br />
                        Descripción: <input type="text" className="w3-input w3-round" id="description" />
                        <br />
                        <br />
                        Número de porciones:<input type="text" className="w3-input w3-round" id="number" />
                        <br />
                        <br />
                        <div >
                            <input type="submit" value="Aceptar" className="w3-button w3-blue w3-round-xlarge" style={{ margin: '10px' }}></input>
                            <button className="w3-button w3-blue w3-round-xlarge" style={{ margin: '10px' }}
                                onClick={this.handleOpen}>Opciones adicionales</button>
                        </div>
                    </form>
                    <PopUpFood open={this.state.showPopUp} onClose={this.handleClose} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default publish;