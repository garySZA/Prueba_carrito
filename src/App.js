import React from "react";
import "./App.css";
import "./style.css";
import ContenedorCarrito from './ContenidoCarrito'



class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      productos:[
        {producto: 'carne', precio: 25, descuento:0.5, cantidad: 1},
        {producto: 'piernas de pollo', precio: 17, descuento:0.5, cantidad: 1},
        {producto: 'chuletas de cerdo', precio: 18, descuento:0.5, cantidad: 1}
      ]
    };
  }
  
  render(){
    return(
      <ContenedorCarrito items={this.state.productos}/>
    );
  }
}


export default App;

//      producto precio descuento cantidad