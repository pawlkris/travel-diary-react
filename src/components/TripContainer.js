import React from "react";
import TripList from "./TripList";
import TripNew from "./TripNew";
import TripShow from "./TripShow";
import TripEdit from "./TripEdit";
import TripStats from "./TripStats";
import Filter from "./Filter";
import TripListMap from "./TripListMap";
import withAuth from "./hocs/withAuth";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../services/api";

class TripContainer extends React.Component {
  state = {
    filter: {
      year: "",
      month: "",
      city: "",
      state: "",
      country: "",
      work: false,
      leisure: false,
      beach: false,
      family: false,
      friends: false,
      description: "",
      sortBy: "newest"
    },
    center: { lat: 33.475451, long: -95.299881 },
    zoom: 4
  };

  filterSubmit = (event, filters) => {
    event.preventDefault();
    this.setState(prevState => ({ ...prevState, filter: filters }));
  };

  handleNewSubmit = (event, trip) => {
    event.preventDefault();
    let valid = true;
    for (let key in trip.valid) {
      if (!trip.valid[key]) valid = false;
    }
    if (valid) {
      trip["user_id"] = this.props.currentUser.id;
      api.trips
        .newTrip(trip)
        .then(json => this.props.history.push(`/trips/${json.id}`))
        .then(this.props.loadTrips);
    } else {
      alert(
        "Invalid Trip! Please make sure Trip Name, Start Date, and End Date are filled in."
      );
    }
  };

  handleDelete = id => {
    api.trips
      .deleteTrip(id)
      .then(this.props.loadTrips)
      .then(this.props.history.push(`/trips`));
  };

  handleEdit = (event, trip) => {
    event.preventDefault();
    api.trips
      .editTrip(trip)
      .then(json => this.props.history.push(`/trips/${json.id}`))
      .then(this.props.loadTrips);
  };

  handleMapMarkerClick = cityName => {
    this.setState(prevState => ({
      ...prevState,
      filter: { ...prevState.filter, city: cityName }
    }));
  };

  resetMapState = () => {
    this.setState(prevState => ({
      ...prevState,
      center: { lat: 33.475451, long: -95.299881 },
      zoom: 4
    }));
  };

  resetFilterState = () => {
    this.setState(prevState => ({
      ...prevState,
      filter: {
        year: "",
        month: "",
        city: "",
        state: "",
        country: "",
        work: false,
        leisure: false,
        beach: false,
        family: false,
        friends: false,
        description: "",
        sortBy: "newest"
      }
    }));
  };

  render() {
    let filteredTrips = this.props.trips;
    const { filter } = this.state;

    //filter conditionals for all state.filter --- refactor to map filter object and separate keys
    if (filter.year)
      filteredTrips = filteredTrips.filter(
        t =>
          t.start_date.slice(0, 4) === filter.year ||
          t.end_date.slice(0, 4) === filter.year
      );
    if (filter.month)
      filteredTrips = filteredTrips.filter(
        t =>
          parseInt(t.start_date.slice(5, 7), 10) ===
            parseInt(filter.month, 10) ||
          parseInt(t.end_date.slice(5, 7), 10) === parseInt(filter.month, 10)
      );
    if (filter.city)
      filteredTrips = filteredTrips.filter(
        t => t.location.city.toLowerCase() === filter.city.toLowerCase()
      );
    if (filter.state)
      filteredTrips = filteredTrips.filter(
        t => t.location.state.toLowerCase() === filter.state.toLowerCase()
      );
    if (filter.country)
      filteredTrips = filteredTrips.filter(
        t => t.location.country.toLowerCase() === filter.country.toLowerCase()
      );
    if (filter.leisure) filteredTrips = filteredTrips.filter(t => t.leisure);
    if (filter.beach) filteredTrips = filteredTrips.filter(t => t.beach);
    if (filter.family) filteredTrips = filteredTrips.filter(t => t.family);
    if (filter.friends) filteredTrips = filteredTrips.filter(t => t.friends);
    if (filter.work) filteredTrips = filteredTrips.filter(t => t.work);
    if (filter.description)
      filteredTrips = filteredTrips.filter(t =>
        t.description.toLowerCase().includes(filter.description.toLowerCase())
      );

    switch (filter.sortBy) {
      case "oldest":
        filteredTrips = filteredTrips.sort((a, b) => {
          return Date.parse(a.start_date) - Date.parse(b.start_date);
        });
        break;
      case "alpha":
        filteredTrips = filteredTrips.sort((a, b) => {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "alpha-reverse":
        filteredTrips = filteredTrips.sort((b, a) => {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
        break;
      default:
        filteredTrips = filteredTrips.sort((a, b) => {
          return Date.parse(b.start_date) - Date.parse(a.start_date);
        });
    }

    let locationCount = trips => {
      locationCount = {};
      if (trips.length > 0) {
        trips.forEach(
          trip =>
            !locationCount[trip.location.city]
              ? (locationCount[trip.location.city] = {
                  lat: trip.location.lat,
                  long: trip.location.long,
                  trips: [trip.name]
                })
              : locationCount[trip.location.city]["trips"].push(trip.name)
        );
      }
      return locationCount;
    };

    let filteredLocationCount = locationCount(filteredTrips);
    return (
      <div className="trip-container ui container">
        <Switch>
          <Route
            path="/trips/stats"
            render={() => <TripStats trips={this.props.trips} />}
          />
          <Route
            path="/trips/new"
            render={() => (
              <TripNew
                handleSubmit={this.handleNewSubmit}
                currentUser={this.props.currentUser.id}
              />
            )}
          />
          <Route
            path="/trips/:id/edit"
            render={({ match }) => {
              const trip = this.props.trips.find(
                t => t.id === parseInt(match.params.id, 10)
              );
              return trip ? (
                <TripEdit handleSubmit={this.handleEdit} trip={trip} />
              ) : (
                <div>Loading...</div>
              );
            }}
          />
          <Route
            path="/trips/:id"
            render={({ match }) => {
              const trip = this.props.trips.find(
                t => t.id === parseInt(match.params.id, 10)
              );
              return trip ? <TripShow trip={trip} /> : <div>Loading...</div>;
            }}
          />
          <Route
            path="/trips"
            render={() => {
              return (
                <div className="all-trips">
                  <Filter
                    handleSubmit={this.filterSubmit}
                    filter={this.state.filter}
                    resetFilter={this.resetFilterState}
                  />
                  <TripListMap
                    center={this.state.center}
                    zoom={this.state.zoom}
                    handleClick={this.handleMapMarkerClick}
                    locations={filteredLocationCount}
                    resetMap={this.resetMapState}
                  />
                  <TripList
                    trips={filteredTrips}
                    handleDelete={this.handleDelete}
                  />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withAuth(withRouter(TripContainer));
