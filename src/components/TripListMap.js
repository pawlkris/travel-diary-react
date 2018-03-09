import React from "react";
import GoogleMap from "google-map-react";
import MapMarker from "./MapMarker";

class TripListMap extends React.Component {
  componentWillUnmount() {
    this.props.resetMap();
  }

  render() {
    let markers = Object.entries(this.props.locations).map(
      (location, index) => (
        <MapMarker
          key={index}
          lat={location[1].lat}
          lng={location[1].long}
          name={location[0]}
          trips={location[1].trips}
          hoverDistance={10}
          handleClick={this.props.handleClick}
        />
      )
    );

    return (
      <div className="trip-list-map">
        <GoogleMap
          // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          apiKey={"AIzaSyAv6zJzukQ3qrRUXJ1fGrHwd-6jq0hb-u0"}
          center={[this.props.center.lat, this.props.center.long]}
          zoom={this.props.zoom}
        >
          {markers}
        </GoogleMap>
      </div>
    );
  }
}

export default TripListMap;
