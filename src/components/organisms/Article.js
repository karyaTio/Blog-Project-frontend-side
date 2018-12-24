import React from "react";

export default function Article(props) {
  const article = props.article;

  return (
    <div className="article">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-date">{article.date}</p>
      </div>

      <div className="article-body">{article.slug}</div>
    </div>
  );
}
