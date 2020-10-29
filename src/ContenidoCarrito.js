import React, { Component } from 'react';
import './styles.css';

class ContenidoCarrito extends Component
{

    constructor(props){
        super(props);
    
        this.state = {
          contador: 0,
          mensaje: ""
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
        <div className="container-productos">
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Producto</h3>
                </div>
                <div className="contenido-detalles">
                    <p>Producto1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Precio Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>precioUnitario1</p>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Descuento Unitario <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>descuentoUnitario1</p>
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
                            <button onClick={ this.quitarElementos} className="botonDisminuir"> <i class="fas fa-minus-circle"></i> </button>
                            <button className="botonAumentar"> <i class="fas fa-plus-circle"></i> </button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-detalles">
                <div className="titulo-detalles">
                    <h3 className="columna">Total <i className="fas fa-dollar-sign"></i></h3>
                </div>
                <div className="contenido-detalles">
                    <p>total1</p>
                </div>
            </div>
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