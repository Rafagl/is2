import React from 'react';
import Modal from 'react-responsive-modal';

export default class popUpFood extends React.Component {
    render() {
        return (
        <div>
            <Modal open={this.props.open} onClose={this.props.onClose} center>
            <hr/>
            <form>
            <div className="frame-father w3-light-gray w3-round-large">
                <div className="frame w3-border w3-round-large">
                    <h3>Alérgenos: </h3>
                    <label className="container" onChange={()=>this.props.handleChange(0, "Gluten")}>Gluten
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(0, "Lactosa")}>Lactosa
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(0, "Moluscos")}>Moluscos
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(0, "Crustaceos")}>Crustáceos
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="frame w3-border w3-round-large">
                    <h3>Ingredientes:</h3>
                    <label className="container" onChange={()=>this.props.handleChange(1, "Pollo")}>Pollo
                        <input type="checkbox"/>
                        <span className="checkmark" ></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(1, "Puerro")}>Puerro
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(1, "Tomate")}>Tomate
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container" onChange={()=>this.props.handleChange(1, "Pescado")}>Pescado
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container" onChange={()=>this.props.handleChange(1, "Pasta")}>Pasta
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container" onChange={()=>this.props.handleChange(1, "Leche")}>Leche
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="frame w3-border w3-round-large">
                    <h3>Ubicación:</h3>
                    <label className="container" onChange={()=>this.props.handleChange(2, "Madrid")}>Madrid
                        <input type="checkbox"/>
                        <span className="checkmark" ></span>
                    </label>
                    <label className="container"  onChange={()=>this.props.handleChange(2, "Barcelona")}>Barcelona
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="frame w3-border w3-round-large">
                    <h3>Fecha de elaboración:</h3>
                    <input type="date"  onChange={()=>this.props.handleChange(2, "")}/>

                </div>

            </div>
            <button className="w3-button w3-blue w3-round-xlarge" onClick={this.props.handleSubmit}>Aceptar</button>
            </form>
            </Modal>
        </div>
        );
    }
}

