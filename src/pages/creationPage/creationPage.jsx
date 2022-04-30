import { axiosInstace } from "../../network/axiosConfig";
import React, { useState, useEffect } from "react";
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

// import UploadButton from "../../components/upload-button/upload-button";

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

const CreationPage = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [ingredientError, setIngredientError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [imageError, setImageError] = useState(false);
  const [category, setCategory] = useState("Egyption Recipes");

  console.log(selectedImage);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setIngredientError(false);
    setFormError(false);

    if (title === "" || ingredient === "") {
      setFormError("please enter the required fields above");
    }
    if (title && ingredient) {
      try {
        axiosInstace
          .post("recipes", { title, ingredient, category })
          .then((response) => {
            if (response.data.status === "success") {
              window.location.replace("/recipes");
            }
          });
      } catch (error) {
        console.log(error);
      }
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
            label="Recipe Title"
            variant="outlined"
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
            variant="outlined"
            color="secondary"
            multiline
            minRows={4}
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
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="center">
              <div>Image Preview:</div>
              <img src={imageUrl} alt={selectedImage.name} height="500px" />
            </Box>
          )}
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

export default CreationPage;
