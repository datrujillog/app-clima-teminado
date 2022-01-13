import React from 'react';
import './Cards.css';


import Card from './Card.jsx';
import swal from 'sweetalert';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
          onClose={() => onClose(c.id) }
          // onClose={() => onClose(swal("¡Eliminar!", `LA ciudad " ${ c.id } " fue eliminada`, "error"))}
          
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
