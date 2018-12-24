import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "../organisms/Navbar";
import ArticleList from "../organisms/ArticleList";
import Article from "../organisms/Article";
import About from "../organisms/About";
import Footer from "../organisms/Footer";
import Error from "../organisms/Error";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          id: 1,
          title: "Title 1",
          date: "Date 1",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 2,
          title: "Title 2",
          date: "Date 2",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 3,
          title: "Title 3",
          date: "Date 3",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 4,
          title: "Title 4",
          date: "Date 4",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 5,
          title: "Title 5",
          date: "Date 5",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 6,
          title: "Title 6",
          date: "Date 6",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        },
        {
          id: 7,
          title: "Title 7",
          date: "Date 7",
          slug:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque acturpis commodo, lobortis lorem non, euismod leo. Mauris variustristique lacus, sed placerat nibh faucibus ut. In accumsan et nullaat molestie."
        }
      ],
      selectedArticle: null
    };
  }

  handleSelect = articleId => {
    let selectedArticle = this.state.articles.find(
      article => article.id === articleId
    );
    this.setState({ selectedArticle });
  };

  render() {
    const article = this.state.selectedArticle;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <ArticleList
                  {...props}
                  articles={this.state.articles}
                  onSelect={this.handleSelect}
                />
              )}
            />
            <Route path="/about/" component={About} />
            <Route
              path="/articles"
              render={props => <Article {...props} article={article} />}
            />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
