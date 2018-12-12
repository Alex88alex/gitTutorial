import React, { Component } from 'react';
//import PropTypes from "prop-types";

class Headers extends Component {
    //  static propTypes =  {   неработает..
    //   items:  PropTypes};

  render() {
     console.log('items',this.props.items); 
    return (
      <div>
        {
          this.props.items.map((item,index)=>
          <a href={item.link} key={index}>{item.label}</a>
          )
        }
      </div>
    );
  }
}

export default Headers;