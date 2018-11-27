import React, { Component } from 'react';
import Navlist from './Header.css';
import logo from '../assets/tanamduit.png';
import flag from '../assets/flag.png';
class header extends Component {
  render() {
    return (
       <header className="App-header">

        <div className="logo">
        
         <li><img src={logo} width="200px" alt="tanamduit" /></li> 
          </div>

          <div className="auth">
          <ul className="heads">
            <li><b>LOGIN </b></li>
            <li> <a href="" class="buttonss">DAFTAR</a> </li>
            <li><img src={flag} width="30px" alt="tanamduit" /></li> 
          </ul>
          </div>

        </header>
    );
  }
}

export default header;