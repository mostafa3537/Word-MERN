import { axiosInstace } from "../../network/axiosConfig";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MuiAlert from "@mui/material/Alert";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
    width: 100,
  },
});

const UpdatePage = (state) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [ingredientError, setIngredientError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);
  const [recipe, setRecipe] = useState({});
  // const [imageError, setImageError] = useState(false);
  const [category, setCategory] = useState("Egyption Recipes");
  let params = useParams();

  useEffect(() => {
    try {
      axiosInstace.get(`recipes/${params.id}`).then((response) => {
        setRecipe(response.data.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setIngredientError(false);
    setFormError(false);

    // const formData = new FormData();
    // formData.append("imageCover", selectedImage);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    const data = { title, ingredient };

    try {
      axiosInstace.patch(`recipes/${params.id}`, data).then((response) => {
        if (response.data.status === "success") {
          window.location.replace("/recipes");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const Handlechange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        setTitleError(
          event.target.value.length === 0 ? "please enter a recipe title" : null
        );
        break;

      case "ingredient":
        setIngredient(event.target.value);
        setIngredientError(
          event.target.value.length === 0
            ? "please enter a recipe ingredient"
            : null
        );
        break;

      default:
        break;
    }
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  console.log("recipe", recipe);
  return (
    <Container size="sm" className={classes.margin}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Recipe
      </Typography>

      <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
        <div>
          <TextField
            className={classes.field}
            name="title"
            onChange={Handlechange}
            label="Title"
            variant="filled"
            defaultValue={recipe.title}
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          {titleError && <Alert severity="error">{titleError}</Alert>}
        </div>

        <div>
          <TextField
            className={classes.field}
            name="ingredient"
            onChange={Handlechange}
            label="Ingredient"
            variant="filled"
            defaultValue={recipe.ingredient}
            color="secondary"
            multiline
            minRows={6}
            fullWidth
            required
            error={ingredientError}
          />
          {ingredientError && <Alert severity="error">{ingredientError}</Alert>}
        </div>

        <FormControl className={classes.field}>
          <FormLabel>Recipe Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="Egyption Recipes"
              control={<Radio />}
              label="Egyption Recipes"
            />
            <FormControlLabel
              value="Italian Recipes"
              control={<Radio />}
              label="Italian Recipes"
            />
            <FormControlLabel
              value="Asian Recipes"
              control={<Radio />}
              label="Asian Recipes"
            />
          </RadioGroup>
        </FormControl>
        <>
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
              Upload Image
            </Button>
          </label>
          {recipe.imageCover ? (
            <Box mt={2} textAlign="center">
              <div>
                <FormLabel> Current Image </FormLabel>
              </div>

              <img alt="dish" src={recipe.imageCover} height="300px" />
            </Box>
          ) : null}
        </>
        {formError && <Alert severity="error">{formError}</Alert>}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btn}
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default UpdatePage;
