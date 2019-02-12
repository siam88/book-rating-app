import React, { Component } from "react";
import Rate from './rate'

export class Rating extends Component {
 
  render() {
    return (
      <div>
        {this.props.rating.map((e,i)=> <Rate name ={e} bookId = {this.props.bookId} changeRate= {this.props.changeRate} serial = {i}/> )}
       
      </div>
    );
  }
}

export default Rating;
