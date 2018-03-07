import React from "react";

const MapMarker = props => {
  const markerStyle = {
    position: "absolute",
    width: 17,
    height: 17,

    border: "3px solid #00ACA4",
    borderRadius: 20,
    backgroundColor: "white",
    textAlign: "center",
    color: "#3f51b5",
    fontSize: 10,
    fontWeight: "bold"
  };
  return <div style={markerStyle}>{props.text}</div>;
};

export default MapMarker;
