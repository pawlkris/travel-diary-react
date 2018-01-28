import React from 'react';
import { Link } from 'react-router-dom';


const TripShow = (props) => {
  const {trip} = props;

  const formatDate = (date) => {
    date = new Date(date);
    return `${date.getMonth()+1}/${date.getDate()+1}/${date.getFullYear()}`;
  };

  const tags = []
  if (trip.work) tags.push("work");
  if (trip.leisure) tags.push("leisure");
  if (trip.beach) tags.push("beach");
  if (trip.friends) tags.push("friends");
  if (trip.family) tags.push("family");
  const tagText = tags.join(" - ")

  return (
    <div style={{ opacity: ".9", margin: " 0 20%"}} className="trip ui segment center aligned">
    <h2>{trip.name}</h2>
    <p>Location: {trip.location.city}, {trip.location.state}, {trip.location.country}</p>
    <p>Dates: {formatDate(trip.start_date)} - {formatDate(trip.end_date)}</p>
    <p>Description: {trip.description}</p>
    <p>Tags: {tagText}</p>
    <Link
    to={`/trips/${trip.id}/edit`}>
    <button className="ui labeled icon button">
      <i className="edit icon"></i>
       Edit
    </button>
    </Link>
    </div>
  )
}

export default TripShow;
