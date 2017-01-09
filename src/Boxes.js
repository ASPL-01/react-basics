import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  getColors(){
    // write some awesome random code....
    return {r: 40, g: 50, b: 60, a: 0.5};
  }

  render(){
    return (
      <div>
        <h1>Boxes</h1>
        {
          Array(10).fill(null).map((_, i) =>{
            return <Box key={i} colors={this.getColors()} />;
          })
        }
      </div>
    );
  }
}
