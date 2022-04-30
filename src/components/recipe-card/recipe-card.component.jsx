import React from "react";
import { axiosInstace } from "../../network/axiosConfig";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const deleteHandle = (event) => {
    event.stopPropagation();
    try {
      axiosInstace.delete(`recipes/${recipe.id}`).then((response) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updateHandle = (event) => {
    event.stopPropagation();
    navigate(`/recipes/update/${recipe.id}`);
  };
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <>
              {" "}
              <IconButton onClick={updateHandle}>
                <ModeEditOutlineOutlinedIcon />

              </IconButton>
              <IconButton onClick={deleteHandle}>
                <DeleteOutlined />
              </IconButton>
            </>
          }
          title={recipe.title}
          subheader={recipe.category}
        />
        <CardMedia
          component="img"
          height="300"
          image={recipe.imageCover}
          alt="dish image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" nowrap="true">
            {recipe.ingredient}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
