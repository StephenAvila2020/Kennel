import React, { Component } from 'react';

class EmployeeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-employeename">Eric Cartman</span></h3>
          <p>Job Title: Poop Cleaner</p>
        </div>
      </div>
    );
  }
}

export default EmployeeeCard;