import React, { useState } from "react";

import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [search, setSearch] = useState('')

  function onInputChange(evento) {
    setSearch(evento.target.value)
  }
  /*
  mi funcion que se guarda lo que escribo en el input
  mi funcion que dispara el evento onSearch con lo que guarde de mi input  
  */
  function onSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="inputSearch"
        type="text"
        placeholder="Ciudad..."
        onChange={onInputChange}
      />
      <input className="btnSearch" type="submit" value="Agregar" />
    </form>
  );
}
