import React, { Component } from 'react';
import PopUpFood from './popUpFood';
import { createBrowserHistory } from 'history';


class publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            img: null,
            desc: null,
            porciones: null,
            ingredientes: null,
            alergenos: null
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        let send = true;
        let location = "";
        if (!document.getElementById("checkbox1").checked) {
            if(!document.getElementById("checkbox2").checked){
            }else{
                location = "Madrid"
            }
        }else{
            console.log(!document.getElementById("checkbox1").value)
            location = "Barcelona"
        }



    }

    myFunction = id => {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    render() {
        return (
            <div className="w3-panel w3-round-large w3-topbar w3-bottombar w3-border-blue w3-light-gray w3-padding" style={{ marginTop: '2%', margin: 'auto', width: '60%' }} >
                <form onSubmit={this.handleSubmit} style={{ width: '60%', margin: 'auto' }}>
                    <h3>Nombre:</h3><input type="text" className="w3-input w3-round w3-border" id="name" />
                    <br />
                    <h3>Imagen:</h3><input type="file" className="w3-input w3-round w3-auto w3-border" id="image" />
                    <br />
                    <h3>Descripción:</h3><input type="text" className="w3-input w3-round w3-border" id="description" />
                    <br />
                    <h3>Número de porciones:</h3><input type="text" className="w3-input w3-round  w3-border" id="number" />
                    <br />
                    <div id="options" className="w3-hide w3-center">
                        <h3>Ingredientes:</h3>
                        <input type="text" className="w3-input w3-border w3-round"></input>
                        <h3>Alérgenos:</h3>
                        <input type="text" className="w3-input w3-border w3-round"></input>
                        <div className="frame w3-border w3-round-large">
                            <h3>Ubicación:</h3>
                            <label className="container" onChange={() => this.handleChange(2, "Madrid")}>Madrid
                            <input type="checkbox" id="checkbox1"/>
                                <span className="checkmark" ></span>
                            </label>
                            <label className="container">Barcelona
                            <input type="checkbox" id="checkbox2" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="frame w3-border w3-round-large">
                            <h3>Fecha de elaboración:</h3>
                            <input type="date" />
                        </div>
                    </div>
                    <div >
                        <br />
                        <input type="submit" value="Aceptar" className="w3-button w3-blue w3-round-xlarge" style={{ margin: '10px' }}></input>
                        <button className="w3-button w3-blue w3-round-xlarge" style={{ margin: '10px' }}
                            onClick={() => this.myFunction("options")}>Opciones adicionales</button>
                    </div>
                </form>
            </div>


        );
    }
}

export default publish;