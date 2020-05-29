import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-locationname">Student Kennels</span></h3>
          <p>City: South Park, Colorado</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;