import React, { Component} from 'react';
import cars from './archivo.json'

class CarItem extends Component {
  render () {
    const {car} = this.props

    return(
      <li>
        <p><strong>Nombre</strong>{car.name}</p>
        <p><strong>Marca</strong> {car.company}</p>
      </li>
    )
  }
}
class App extends Component {
  render (){
    return  (
      <div className="App">
        <h4>Trabajando con Listas con Archivo JSON</h4>
        <ul>
          {
            cars.map(car =>{
              return <CarItem  key={car.id} car={car}/>
            })
          }
        </ul>
      </div>
    );
  }  
}


export default App;
