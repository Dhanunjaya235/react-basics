import React, { Component } from 'react';
import './sidenav.css';

class Sidenav extends Component{
  constructor(props){
    super(props);
    this.callRef = React.createRef();
  }
  render(){
    return(
        <div className='sidenav' >
            <nav>
              <ul>
                <li><a href='#feature1'>Feature1</a></li>
                <li><a href='#feature2'>Feature2</a></li>
                <li><a href='#feature3'>Feature3</a></li>
              </ul>
            </nav>
        </div>
    );
  }
}

export default Sidenav;
