import React, { useState } from 'react';
import Cit from './Cit';
import Cite from './Cite';

function SearchQuery() {
const [citizens] = useState([
{ name: 'Mike Jordan', age: '20', address: 'Cebu City', status: 'Active' },
{ name: 'John Villanel', age: '25', address: 'Lawaan Cebu', status: 'Inactive' },
{ name: 'Jade Husky', age: '26', address: 'Vito St. Paul', status: 'Active' },
{ name: 'Lisa Kho To', age: '22', address: 'U.S America', status: 'Active' },
{ name: 'George Hill', age: '44', address: 'Korea', status: 'Inactive' },
{ name: 'Jeoff Zei', age: '61', address: 'Bacay', status: 'Active' },
{ name: 'Lowe Zhan', age: '66', address: 'China', status: 'Inactive' },
{ name: 'Jeffrey Zek', age: '55', address: 'Poland', status: 'Active' },
{ name: 'Jake Kero', age: '54', address: 'Neverland', status: 'Active' },
{ name: 'Jackie Chan', age: '64', address: 'China', status: 'Active' }
  ]);

const [query, setQuery] = useState('');
const [statusVisible, setStatusVisible] = useState(null);
const handleChange = (e) => {
    setQuery(e.target.value);
};
const handleStatusClick = (index) => {
  setStatusVisible(prevIndex => (prevIndex === index ? null : index));
};
const filteredCitizens = citizens
  .filter(citizen =>
    citizen.name.toLowerCase().includes(query.toLowerCase()) ||
    citizen.address.toLowerCase().includes(query.toLowerCase())
    );

const renderCitizen = (citizen, index) => {
const { name, age, address, status } = citizen;
const isStatusVisible = statusVisible === index;

return (
      <div>
<Cit name={name} age={age} address={address} />
<Cite
status={status}
onClick={() => handleStatusClick(index)}
isStatusVisible={isStatusVisible}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Citizens</h1>

  <input
  type="text"
  placeholder="Search for Citizens"
  value={query}
  onChange={handleChange}
  style={{
  fontSize: '14px',
  width: '300px',
        }}
      />

  <ul style={{ listStyleType: 'none' }}>
  {filteredCitizens.length > 0 ? (
  filteredCitizens.map((citizen, index) => (
  <li>
  <b>{index + 1}. </b>
  {renderCitizen(citizen, index)}
  </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchQuery;
