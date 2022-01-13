import React, {useState} from 'react';
import Cards from './components/Cards'
import Nav from './components/Nav'
import swal from 'sweetalert';
import './App.css';

export default function App() {
  const apiKey =  '4ae2636d8dfbdc3044bede63951a019b' //guardarlo en una variable de entorno.
  //como guardar variables de entorno, lo vemos en el M3

  const [cities, setCities] = useState([])

  function onSearch(ciudad) { //la declaro!
    // const ciudadEjemplo = {
    //   min: 32,
    //   max: 35,
    //   img: "03n",
    //   id: 2172797,
    //   wind: 3.6,
    //   temp: 300.15,
    //   name: "Cairns",
    //   weather: "Clouds",
    //   clouds: 40,
    //   latitud: -16.92,
    //   longitud: 145.77
    // };
    // cities.push(ciudadEjemplo) NO se hace
    /*
  
    var arreglo = []
    arreglo.concat(cities).push(ciudadEjemplo)
    setCities(arreglo)
    */
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((recurso) => {
      // console.log(recurso)
      if(recurso?.cod !== '404') {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities([...cities, ciudad])
      } else {
        // alert('ciudad no encontrada')
        swal("Error", "Ciudad no encontrada!", "error");
      }
    })
  }
  function onClose(id) {
    var copyCities = cities.filter((ciudad) => { //filter devuelve un nuevo array
      return ciudad.id !== id
    })
    setCities([...copyCities])
  }
  return (
    <div className="App">
     <Nav onSearch={onSearch} />{/*le paso la funcion!*/}
     <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}

/*
App----> un estado que se llame cities, una funcion que se onSearch
cities---> va a guardar todas nuestras ciudades
onSearch---> buscar una nueva ciudad, y agregarla a nuestro estado
Cards---> recibir las cities, y mostrarlas
Nav---> va a recibir onSearch y se lo va a pasar a SearchBar
Searchbar----> va a guardar el string de la busqueda, y llamabar a onSearch con eso.
*/