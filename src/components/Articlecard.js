import React, { Component } from "react";

class Articlecard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img
            className="card-image"
            src="https://via.placeholder.com/150"
            alt="article thubnail"
          />
        </div>

        <div className="card-body">
          <h1 className="card-title">Title of card</h1>
          <p className="card-date">05 January 2019</p>
          <p className="card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            turpis commodo, lobortis lorem non, euismod leo. Mauris varius
            tristique lacus, sed placerat nibh faucibus ut. In accumsan et nulla
            at molestie.
          </p>
          <a className="card-read" href="https://via.placeholder.com/150">
            Read more >>
          </a>
        </div>
      </div>
    );
  }
}

export default Articlecard;
