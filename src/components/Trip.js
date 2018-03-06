import React from "react";
import { Link } from "react-router-dom";

const Trip = props => {
  const { trip } = props;

  const formatDate = date => {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="trip ui centered card">
      <div className="content">
        <h3>{trip.name}</h3>
        <p>
          Location: {trip.location.city},{" "}
          {trip.location.state ? `${trip.location.state},` : ""}{" "}
          {trip.location.country}
        </p>
        <p>
          Dates: {formatDate(trip.start_date)} - {formatDate(trip.end_date)}
        </p>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link to={`/trips/${trip.id}`} className="ui basic button black">
            <i className="add circle icon" />
            More Info
          </Link>
          <div
            onClick={() => props.handleDelete(trip.id)}
            className="ui inverted button red"
          >
            <i className="trash icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;

// "name": "a new trip",
// "description": "going to a place",
// "city": "some city",
// "state": "this state",
// "country": "country",
// "user_id": 1,
// "start_date": "2017-01-08",
// "end_date": "2017-01-10",
// "people_involved": null,
// "photos": null,
// "events": null,
// "work": true,
// "leisure": false,
// "beach": false,
// "family": true,
// "friends": false
