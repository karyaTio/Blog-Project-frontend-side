import React from "react";
import { Link } from "react-router-dom";

export default function Articlecard(props) {
  let path = "articles/" + props.id;

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
        <h1 className="card-title">{props.title}</h1>
        <p className="card-date">{props.date}</p>
        <p className="card-desc" />
        <Link
          to={path}
          className="card-read"
          onClick={() => props.onSelect(props.id)}
        >
          Read more >>
        </Link>
      </div>
    </div>
  );
}
