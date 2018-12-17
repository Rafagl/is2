import React from 'react';
import Food from './food';
import '../App.css'
import '../w3css.css';
import PopUpFood from './popUpFood';


class foodContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPopUp: false,
            productos: [],
            uriProductos : "http://localhost:8080/MiComida/api/productos",
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
    }

    handleOpen = () => {
        this.setState({
            showPopUp: true
        })
    }

    handleChange = (campo, item) =>{

        let exit = false;
    
        this.state.data[campo].map(ob=>{
            if(ob === item){
                exit=true
                this.setState({
                    [this.state.data[campo]]: this.state.data[campo].pop(item)
                })
            }
        })
    
        if(!exit){
            this.setState({
                [this.state.data[campo]]: this.state.data[campo].push(item)
            })
        }
    }

    componentWillMount(){
          fetch("http://localhost:8080/MiComida/api/productos?id_usuario=" + this.props.usuario, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((objeto) => {
            this.setState({
                productos: objeto.producto
            });
        }).catch(err => {console.log(err);});
    }

    handleSubmit = () =>{
        let aux = ["","","",""]
        let array = [4]
    
        for (let i = 0; i < 3; i++) {
            this.state.data[i].map(item => {
                aux[i] += item + ";"
            })
        }
        
        array[0] = aux[0].substring(0, aux[0].length-1);
        array[1] = aux[1].substring(0, aux[1].length-1);
        array[2] = aux[2].substring(0, aux[2].length-1);
    
        let path = "?"
        const tipos = ["productos=", "alergenos=", "ubicacion=", "fecha="]
        for (let i = 0; i < 3; i++) {
            if(this.state.data[i].length===0){}
            else{
                path+= tipos[i] + array[i] + "&"
            }
        }
        path = path.substring(0, path.length-1);
        path = "http://localhost:8080/MiComida/api/productos" + path
        this.setState({
          uriProductos : path,
          data: [
            [],
            [],
            [],
            ""
          ]
        })
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
        if (this.state.productos !== null){
        return (
            <div>
                <br/>
                <button className="w3-button w3-blue w3-round-xlarge w3-margin" onClick={() => this.myFunction("options")}>Filtros</button>
                <button className="w3-button w3-blue w3-round-xlarge" >Buscar</button>

                <div id="options" className="w3-panel w3-round-large w3-topbar w3-bottombar w3-border-blue w3-light-gray w3-padding w3-hide" style={{ marginTop: '2%', margin: 'auto', width: '30%' }}>
                        <h3>Nombre:</h3>
                        <input type="text" className="w3-input w3-border w3-round"></input>
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
                <PopUpFood open={this.state.showPopUp} onClose={this.handleClose} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleSearch={this.handleSearch}/>
                <div className="food-grid-container">
                    <div className="food-grid">
                        {this.state.productos.map((producto,i) => {
                            return <Food key={i} userName={producto.nombre}></Food>;
                        })}
                    </div>
                </div>
            </div>
        );
        }
     else return (<div />);
    }
}

export default foodContainer;