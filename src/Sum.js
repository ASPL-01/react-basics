import React from 'react';

export default (props) => {
  let sum = props.nums.reduce((acc, cur) => acc + cur);
  return (
    <div>
      <h1>Sum</h1>
      <ul>
      {
        props.nums.map((num, index) => <li key={index}>{num}</li>)
      }
      </ul>
      <p>
        {sum}
      </p>
    </div>
  );
};
