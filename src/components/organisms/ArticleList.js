import React from "react";
import ArticleCard from "../molecules/Articlecard";

export default function ArticleList(props) {
  const articleslist = props.articles.map(article => (
    <ArticleCard
      key={article.id}
      id={article.id}
      title={article.title}
      date={article.date}
      slug={article.slug}
      onSelect={props.onSelect}
    />
  ));
  return <div>{articleslist}</div>;
}
