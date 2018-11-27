import React, { Component } from 'react';
import Navlist from './Navlist.css';

class navlist extends Component {
  render() {
    return (
      <div class="navlists">
      	<li>Manajer<br />Investasi<br /><i>Apa ini?</i></li>
      	<li>Nama Produk<br /><br /><i>Apa ini?</i></li>
      	<li>Jenis<br />Produk<br /><i>Apa ini?</i></li>
      	<li>Tingkat <br />Resiko<br /><i>Apa ini?</i></li>
      	<li>KINERJA<br />1 Tahun<br /><i>Apa ini?</i></li>
      	<li>Total<br />Dana kelolaan<br /><i>Apa ini?</i></li>
      </div>
    );
  }
}

export default navlist;