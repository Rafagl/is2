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
            href: [],
            productos: [],
            users: [],
            uriProductos : "",
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
        path = "http://localhost:8080/MiComida/api" + path
        this.setState({
          uriProductos : path,
          data: [
            [],
            [],
            [],
            ""
          ]
        })
        
        console.log(path)

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({
                 users: json 
                }));

    }
    render() {
        
        return (
            <div>
                <br/>
                <button className="w3-button w3-blue w3-round-xlarge" onClick={this.handleOpen}>Buscar</button>
                <PopUpFood open={this.state.showPopUp} onClose={this.handleClose} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <div className="food-grid-container">
                    <div className="food-grid">
                        {this.state.users.map(item => {
                            return <Food key={item.id} userName={item.name}></Food>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default foodContainer;