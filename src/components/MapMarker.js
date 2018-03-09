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
    const hoverMarkerStyle = {
      position: "absolute",
      width: 100,
      left: -8,
      top: -8,

      border: "3px solid #00ACA4",
      backgroundColor: "white",
      textAlign: "center",
      color: "#3f51b5",
      fontSize: 10,
      fontWeight: "bold"
    };

    const tripNames = this.props.trips.map((name, index) => (
      <p key={index}>{`${index + 1}. ${name}`}</p>
    ));

    const style = this.props.$hover ? hoverMarkerStyle : markerStyle;
    const markerContent = this.props.$hover ? (
      <div>{tripNames}</div>
    ) : (
      this.props.trips.length
    );
    return (
      <div
        onClick={() => this.props.handleClick(this.props.name)}
        style={style}
      >
        {markerContent}
      </div>
    );
  }
}

export default MapMarker;
