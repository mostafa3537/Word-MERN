import React from "react";
import { useNavigate } from "react-router-dom";

import "./recipe-item.styles.scss";

const RecipeItem = ({ title, size, id, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`recipe-item ${size} `}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default RecipeItem;
