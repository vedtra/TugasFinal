import React, { Component } from 'react';
import './App.css';
import List from './List/List';
import Navlist from './navigation/Navlist';
import Detail from './List/Detail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './navigation/Button';
import Header from './navigation/Header';
import Footer from './navigation/Footer';

class App extends Component {
  
  render() {
    return (

      <div>
        <Header />
        <div className="content">
          <Navlist />
                <div className="produks">
                     <List />
                     <Button />
                     </div>
                     <Footer />
            </div>

         </div>

    );
  }
}

export default App;
