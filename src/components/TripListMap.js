import React from "react";
import GoogleMap from "google-map-react";
import MapMarker from "./MapMarker";

class TripListMap extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="trip-list-map">
        <GoogleMap
          // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          apiKey={"AIzaSyAv6zJzukQ3qrRUXJ1fGrHwd-6jq0hb-u0"}
          defaultCenter={[this.props.center.lat, this.props.center.long]}
          defaultZoom={this.props.zoom}
        >
          <MapMarker lat={38.692554} lng={-90.493345} text={"3"} />
        </GoogleMap>
      </div>
    );
  }
}

export default TripListMap;
