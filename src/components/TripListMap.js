import React from "react";
import GoogleMap from "google-map-react";
import MapMarker from "./MapMarker";

class TripListMap extends React.Component {
  render() {
    let markers = Object.entries(this.props.locations).map(
      (location, index) => (
        <MapMarker
          key={index}
          lat={location[1].lat}
          lng={location[1].long}
          text={location[1].count}
        />
      )
    );

    return (
      <div className="trip-list-map">
        <GoogleMap
          // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          apiKey={"AIzaSyAv6zJzukQ3qrRUXJ1fGrHwd-6jq0hb-u0"}
          center={[this.props.center.lat, this.props.center.long]}
          defaultZoom={this.props.zoom}
        >
          {markers}
        </GoogleMap>
      </div>
    );
  }
}

export default TripListMap;
