import React from "react";

export default function Article(props) {
  return (
    <div className="article">
      <div className="article-header">
        <h1 className="article-title">{props.title}</h1>
        <p className="article-date">{props.dateUpdated}</p>
      </div>

      <div className="article-body">{props.body}</div>
    </div>
  );
}
