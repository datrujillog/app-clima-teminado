import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) { {/*la recibo como prop*/}
  return (
    <div className="navbar navbar-dark " style= { {color: 'white'}}>
      <span>
        Henry - Weather App
      </span>
      <SearchBar onSearch={onSearch}/> {/*le paso la funcion!*/}
    </div>
  );
};

export default Nav;
