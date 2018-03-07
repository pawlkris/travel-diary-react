import React from "react";

class MapMarker extends React.Component {
  render() {
    const markerStyle = {
      position: "absolute",
      width: 17,
      height: 17,
      left: -8,
      top: -8,

      border: "3px solid #00ACA4",
      borderRadius: 20,
      backgroundColor: "white",
      textAlign: "center",
      color: "#3f51b5",
      fontSize: 10,
      fontWeight: "bold"
    };
    return <div style={markerStyle}>{this.props.text}</div>;
  }
}

export default MapMarker;
