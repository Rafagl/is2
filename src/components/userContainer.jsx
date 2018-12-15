import React, { Component } from 'react';
import '../App.css'
import '../w3css.css';
import User from './user'


class userContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            href: [],
            productos: []
         };
    }
    render() {
        return (
            <div>
                <div className="food-grid-container">
                    <div className="food-grid">
                        {this.state.productos.map(item => {  
                            return <User key={item.id}></User>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default userContainer;