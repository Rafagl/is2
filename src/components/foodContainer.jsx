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
    render() {
        if (this.state.productos !== null){
        return (
            <div>
                <br/>
                <button className="w3-button w3-blue w3-round-xlarge" onClick={this.handleOpen}>Buscar</button>
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