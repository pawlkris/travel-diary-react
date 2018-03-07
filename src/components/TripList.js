import React from "react";
import Trip from "./Trip";
var shortid = require("shortid");

const TripList = props => {
  const tripCards = props.trips.map(trip => (
    <Trip
      trip={trip}
      handleDelete={props.handleDelete}
      key={shortid.generate()}
    />
  ));

  return <div className="ui cards centered trip-list">{tripCards}</div>;
};

export default TripList;
