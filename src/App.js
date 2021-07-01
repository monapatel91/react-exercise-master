import React, { useState } from 'react';

import data from './us-cities.json';
import './App.css'

function App() {
  const [filterdData, setFilterdData] = useState([]);
  const [cityDetailsDiv, setDetailsDiv] = useState(null);
  function displayCities(e) {
    const filteredData = data.filter((city) =>{ return city.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1 })
    setFilterdData(filteredData);
    
  }
  function tdButton(name,country,details,location){
    setDetailsDiv(`<div><p>City Name: ${name}</p>
                <p>Country Name: ${country}</p>
                <p>Likes: ${details}</p>
                <p>Location: lat-${location.lat}, lng-${location.lng}</p>
                </div>`)
  }
  const renderTableRow = filterdData.map((city,i) =>
    <tr key={i} onClick = {(e) => tdButton(city.name,city.country,city.details.likes,city.location)}>
      <td>{city.name}</td>
      <td>{city.country}</td>
      <td>{city.details.likes}</td>
    </tr>
  )
  return (
    <React.Fragment>
      <h1>React Typeahead</h1>
      
      <input type="text" onChange= {(e) => displayCities(e)} />
      <div className="cityDetailsWrapper">
      <table className="cityDetailstbl">
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRow}
          </tbody>
        </table>
        {cityDetailsDiv && <div className="cityDetailsDiv" dangerouslySetInnerHTML={{__html: cityDetailsDiv}} />}
        </div>
        </React.Fragment>
  );
}

export default App;
