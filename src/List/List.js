import React from 'react';

import List from './List.css';
import Detail from './Detail.js';
class list extends React.Component{

  constructor(props) {
      super(props);
      this.state ={
          items:[],
          isLoaded:false,

      }



  }
  
 componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('https://5be6e07d87be04001325b5bf.mockapi.io/api/v1/list')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  }

  render(){
      return(
        <div>
{this.state.items.map(function(item, index) {

  return (


  
       <div key={item.id}>
          
          <li class="coba">
              <li ><img src={item[1].image} width="50px" alt="tanamduit" /></li>
              <li>{item[1].manajer}<Detail /></li> 
              <li>{item[1].jenis}</li>
              <li>{item[1].resiko}</li>
              <li>{item[1].kinerja}</li>
              <li>{item[1].totaldana}</li>
              </li>
              <br />
               <br />
                <br />
                 <br />
               <li class="coba">
               
              <li><img src={item[2].image} width="50px" alt="tanamduit" /></li>
              <li>{item[2].manajer} <Detail /></li> 
              <li>{item[2].jenis}</li>
              <li>{item[2].resiko}</li>
              <li>{item[2].kinerja}</li>
              <li>{item[2].totaldana}</li>
              </li>
            <br />
               <br />
                <br />
                 <br />
                <li class="coba">
             <li><img src={item[3].image} width="50px" alt="tanamduit" /></li>
              <li>{item[3].manajer} <Detail /></li> 
              <li>{item[3].jenis}</li>
              <li>{item[3].resiko}</li>
              <li>{item[3].kinerja}</li>
              <li>{item[3].totaldana}</li>
              </li>
               <br />
               <br />
                <br />
                 <br />
               <li class="coba">  
              <li><img src={item[4].image} width="50px" alt="tanamduit" /></li>
              <li>{item[4].manajer} <Detail /></li> 
              <li>{item[4].jenis}</li>
              <li>{item[4].resiko}</li>
              <li>{item[4].kinerja}</li>
              <li>{item[4].totaldana}</li>
              </li>
              <br />
               <br />
                <br />
                 <br />
                <li class="coba">
               <li><img src={item[5].image} width="50px" alt="tanamduit" /></li>
              <li>{item[5].manajer} <Detail /></li> 
              <li>{item[5].jenis}</li>
              <li>{item[5].resiko}</li>
              <li>{item[5].kinerja}</li>
              <li>{item[5].totaldana}</li>
               </li>
              <br />
               <br />
                <br />
                 <br />
                 <li class="coba">
               <li><img src={item[6].image} width="50px" alt="tanamduit" /></li>
              <li>{item[6].manajer} <Detail /></li> 
              <li>{item[6].jenis}</li>
              <li>{item[6].resiko}</li>
              <li>{item[6].kinerja}</li>
              <li>{item[6].totaldana}</li>
              </li>
          </div>
        );
        
       }
        )
       
    }   
</div>
  );
  }
  
}
export default list;