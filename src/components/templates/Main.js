import React, { Component } from "react";

import Navbar from "../organisms/Navbar";
import ArticleCard from "../Articlecard";
import Article from "../organisms/Article";
import Footer from "../organisms/Footer";

export default class Basic extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Article title="Hallo" body="Tes" dateUpdated="10 January 2019" />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
