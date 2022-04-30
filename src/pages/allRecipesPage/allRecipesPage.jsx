import React, { useState, useEffect } from "react";
import { axiosInstace } from "../../network/axiosConfig";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RecipeCard from "../../components/recipe-card/recipe-card.component";

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  try {
    useEffect(() => {
      axiosInstace.get("recipes").then((response) => {
        setRecipes(response.data.data.data);
      });
    }, []);
    console.log("state", recipes);
  } catch (error) {
    console.log(error);
  }
  if (recipes.length === 0) {
    return (
      <Typography align="center" variant="h5" color="textSecondary">
        There is no recipes yet..
      </Typography>
    );
  } else {
    return (
      <Container>
        <Grid container spacing={3}>
          {recipes.map((recipe) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={recipe.id}
              onClick={() => {
                navigate(`/${recipe.id}`);
              }}
            >
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default AllRecipesPage;
