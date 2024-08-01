import React from 'react';

function Cite({ status, onClick, isStatusVisible }) {
  return (
  <div>
  <b>Status:</b>
  <span
  onClick={onClick}
  style={{
  border: '1px solid black',
  cursor: 'pointer',
  }}
  >
  {isStatusVisible ? status : 'Show Status'}
  </span>
  </div>
  );
}

export default Cite;