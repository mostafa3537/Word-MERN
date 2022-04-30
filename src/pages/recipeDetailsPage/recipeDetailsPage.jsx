import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstace } from "../../network/axiosConfig";

const RecipeDetailsPage = () => {
  const [recipe, setRecipes] = useState([]);
  let params = useParams();

  try {
    useEffect(() => {
      axiosInstace.get(`recipes/${params.id}`).then((response) => {
        setRecipes(response.data.data.data);
      });
    }, [params]);
    console.log("state", recipe);
    console.log("state", params);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h5>{recipe.ingredient}</h5>
    </div>
  );
};

export default RecipeDetailsPage;
