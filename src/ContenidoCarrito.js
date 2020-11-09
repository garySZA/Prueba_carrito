import React, { Component } from 'react';
import './styles.css';

class ContenidoCarrito extends Component
{

    constructor(props){
        super(props);
    
        this.state = {
          contador: 1,
          mensaje: "",
          productos:[
            {producto: 'carne', precio: 25, descuento:0.5, cantidad: 1},
            {producto: 'piernas de pollo', precio: 17, descuento:0.5, cantidad: 1},
            {producto: 'chuletas de cerdo', precio: 18, descuento:0.5, cantidad: 1},
            {producto: 'cereal', precio: 30, descuento:5, cantidad: 2},
            {producto: 'yogurt', precio: 18, descuento:3, cantidad: 3},
            {producto: 'Oreo', precio: 5, descuento:0, cantidad: 6},
            {producto: 'CocaCola', precio: 13, descuento:0, cantidad: 1},
            {producto: 'pan', precio: 0.5, descuento:0, cantidad: 10},
            {producto: 'Mantequilla', precio: 17, descuento:2, cantidad: 1},
            {producto: 'Helado', precio: 27, descuento:0.5, cantidad: 2},
            {producto: 'Mortadela', precio: 11, descuento:0, cantidad: 3}
            
          ]
        };
      }
    
      cant = 10;
      msj = "No existen mas elementos disponibles";
      msj2 = "Carrito Vacio";
      msjVacio = "";
    
      aumentar = ()=>{
        if(this.state.contador < this.cant){
          this.setState({contador:this.state.contador+1});
          
        }else{
          this.setState({mensaje: this.msj});
        }
    
        if(this.state.mensaje === this.msj2){
          this.setState({mensaje: this.msjVacio});
        }
    
      }
    
      quitarElementos = ()=>{
        if(this.state.contador>0){
          this.setState({contador:this.state.contador-1});
        }else{
          this.setState({mensaje: this.msj2})
        }
    
        if(this.state.mensaje === this.msj){
          this.setState({mensaje: this.msjVacio})
        }
      }
      
      render() {
        return (
         
            <div className= "ContenedorGeneral">
                <div className="contenedorIcono">
                <div className="boton-volverAtras">
                    <a href="https://www.google.com" target="blank"><i className="fas fa-angle-left"></i></a>
                </div>
    
            <div className="container">
                <div className="container-title">
                    <h2 className="title">Tu Carrito de Compras</h2>
                    <div className="icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
                <div>
                    {
                        this.state.productos.map(item =>
                        <div className="container-productos">
                            <div className="container-detalles">
                        <div className="titulo-detalles">
                            <h3 className="columna">Producto</h3>
                        </div>
                        <div className="contenido-detalles">
                            <p>{item.producto}</p>
                        </div>
                    </div>
                    <div className="container-detalles">
                        <div className="titulo-detalles">
                            <h3 className="columna">Precio Unitario <i className="fas fa-dollar-sign"></i></h3>
                        </div>
                        <div className="contenido-detalles">
                        <p>{item.precio}</p>
                        </div>
                    </div>
                    <div className="container-detalles">
                        <div className="titulo-detalles">
                            <h3 className="columna">Descuento Unitario <i className="fas fa-dollar-sign"></i></h3>
                        </div>
                        <div className="contenido-detalles">
                        <p>{item.descuento}</p>
                        </div>
                    </div>
                    <div className="container-detalles">
                        <div className="titulo-detalles">
                            <h3 className="columna">Cantidad</h3>
                        </div>
                        <div className="contenido-detalles">
                            <div className="aumentar-cantidad">
                                <div className="contenedorNumeros"> 
                                    <p>{this.state.contador}</p>
                                </div>
                                <div className="contenedorBotonesCantidad">
                                    <button className="botonDisminuir" onClick={ this.quitarElementos}> <acronym title="Reducir"><i class="fas fa-minus-circle"></i></acronym> </button>
                                    <button className="botonAumentar" onClick={ this.aumentar }><acronym title="Aumentar"><i class="fas fa-plus-circle"></i></acronym></button> 
                                    <button className="botonEliminar"><acronym title="Eliminar"><i class="fas fa-trash-alt"></i></acronym></button>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="container-detalles">
                        <div className="titulo-detalles">
                            <h3 className="columna">Total <i className="fas fa-dollar-sign"></i></h3>
                        </div>
                        <div className="contenido-detalles">
                        <p>{(this.state.contador * item.precio) - item.descuento}</p>
                        </div>
                    </div>
                        </div>    
                        )
                    }
                </div>
        <div className="container-buttons ">
            <div className="boton-aceptar btn">
                <a href="#">Aceptar</a>
            </div>
            <div className="boton-vaciar btn">
                <a href="#">Vaciar Carrito</a>
            </div>
        </div>
    </div>
            </div>
        </div>
        );
      }


}

export default ContenidoCarrito;