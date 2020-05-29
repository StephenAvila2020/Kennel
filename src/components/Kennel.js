import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard.js'
import OwnerCard from './owner/OwnerCard.js'
import EmployeeCard from './employee/EmployeeCard.js'
import LocationCard from './location/LocationCard.js'


class Kennel extends Component {
    // kennelName = "Student Kennels";
//classes have properties and methods just like objects

    render() {
        return (
	<div class="container-main">
	    	<div class="section-content">
                	<h2>Student Kennels<br />
                   	 	<small>Loving care when you're not there.</small>
                	</h2>
                	<address>
                    		Visit Us at the Nashville North Location
                    		<br />500 Puppy Way
                	</address>
            	</div>
				<AnimalCard />
				<OwnerCard />
				<EmployeeCard />
				<LocationCard />

	</div>
	
        );
    }
}

export default Kennel