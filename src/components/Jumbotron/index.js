import React, {Component} from "react";

class Jumbo extends React.Component {
  render (){
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
    </div>
  );
}
}

export default Jumbo;
