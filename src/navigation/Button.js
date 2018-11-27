import React, { Component } from 'react';
import Navlist from './Button.css';
import Compare from './Compare.js';
import style from './style.css';
import test from './test.css';
import w3 from './w3.css';
import batavia from '../assets/batavia.png';
import mandiri from '../assets/mandiri.png';
import manu from '../assets/manu.png';
import pina from '../assets/pina.png';
import sucor from '../assets/sucor.png';

class button extends Component {
  render() {
    return (
      <div class="navlist">
      	 <li>
                  <a href="" class="button">BELI</a>
                 
                  <div class="selectProduct " data-title="batavia" data-id="batavia" data-size="Pasar Uang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
        <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
        <img src={batavia} alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
        </div> 
              </li>
              
                  <br />
              <li>

              <a href="" class="button">BELI</a>
              <div class="selectProduct" data-title="mandiri" data-id="mandiri" data-size="Pasar Uang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
                <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
                <img src={mandiri} alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
        </div>
              </li>
              <br />

              <li>
              <a href="" class="button">BELI</a><br /> 
              <div class="selectProduct " data-title="MandiriSyariah" data-id="syariah" data-size="Pasar Uang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
                  <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
                  <img src={mandiri} alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
                  </div>
              </li>
              <br />
              <li>
              <a href="" class="button">BELI</a><br /> 
              <div class="selectProduct " data-title="ManuLife" data-id="Manu Life" data-size="Pasar Uang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
                  <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
                  <img src={manu} alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
                  </div>
              </li>
              <br />

              <li>
              <a href="" class="button">BELI</a><br /> 
                  <div class="selectProduct " data-title="pinnacle" data-id="pinnacle" data-size="Pasar Uang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
                  <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
                  <img src={pina}  alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
                  </div>
              </li>
              <br />
              <br />
              <br />
              <li>
              <a href="" class="button">BELI</a><br />   
                  <div class="selectProduct " data-title="SucorinvestMoneyMarket " data-id="SucorinvestMoneyMarket" data-size="PasarUang" data-weight="130 g" data-processor="2.3 GHz, Quad Core, Qualcomm Snapdragon 800" data-battery="2300 mAH">
                  <a class="addToCompare"><button class="buttons">BANDINGKAN</button></a>
                  <img src={sucor} alt="tanamduit" class="imgFill productImg" height="0" width="0"/>
                  </div>
              </li>
              
  <div class="w3-container  w3-center">
    <div class="w3-row w3-card-4 w3-grey w3-round-large w3-border comparePanle w3-margin-top">
        <div class="w3-row">
            <div class="w3-col l9 m8 s6 w3-margin-top">
                <h4>Bandingkan Produk Reksa Dana yang Berbeda</h4>
            </div>
            <div class="w3-col l3 m4 s6 w3-margin-top">
                 
                <button class="w3-btn w3-round-small w3-white w3-border notActive cmprBtn" disabled>BANDINGKAN</button>
            </div>
        </div>
        <div class=" titleMargin w3-container comparePan">
        </div>
    </div>
</div>    


  <div id="id01" class="w3-animate-zoom w3-white w3-modal modPos">
        <div class="w3-container">
            <a onclick="document.getElementById('id01').style.display='none'" class="whiteFont w3-padding w3-closebtn closeBtn">&times;</a>
        </div>
        <div class="w3-row contentPop w3-margin-top">
        </div>

    </div>

</div>

    );
  }
}

export default button;