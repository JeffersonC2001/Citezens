import React from 'react';

function Cit({ name, age, address }) {
  return (
    <div>
      <div><b>Name:</b> {name}</div>
      <div><b>Age:</b> {age}</div>
      <div><b>Address:</b> {address}</div>
    </div>
  );
}

export default Cit;

