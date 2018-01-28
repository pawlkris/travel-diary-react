import React from 'react';
import Trip from './Trip';
var shortid = require('shortid');


const TripList = (props) => {

  const tripCards = props.trips.map(trip => (
    <Trip trip={trip} handleDelete={props.handleDelete} key={shortid.generate()}/>
  ))

  return (
    <div className="trip-list ui cards centered">
      {tripCards}
    </div>

  )
}

export default TripList;
