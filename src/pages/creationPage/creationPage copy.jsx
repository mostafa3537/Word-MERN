// /* eslint-disable no-unused-vars */
// import { axiosInstace } from "../../network/axiosConfig";
// import React, { useState } from "react";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
// import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";
// import { connect } from "react-redux";

// import UploadButton from "../../components/upload-button/upload-button";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
//   btn: {
//     marginTop: 20,
//     marginBottom: 20,
//     width: 100,
//   },
//   container: {
//     margin: 100,
//   },
// });

// const CreationPage = (state) => {
//   const classes = useStyles();
//   const [title, setTitle] = useState("");
//   const [ingredient, setIngredient] = useState("");
//   const [image, setImage] = useState("image");
//   const [titleError, setTitleError] = useState(false);
//   const [ingredientError, setIngredientError] = useState(false);
//   const [formError, setFormError] = useState(false);
//   // const [imageError, setImageError] = useState(false);
//   const [category, setCategory] = useState("Egyption Recipes");

//   console.log(state);
//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     setTitleError(false);
//     setIngredientError(false);
//     setFormError(false);

//     if (title === "" || ingredient === "") {
//       setFormError("please enter the required fields above");
//     }
//     if (title && ingredient) {
//       console.log(title, ingredient, category);
//       try {
//         axiosInstace
//           .post("recipes", { title, ingredient, image })
//           .then((response) => {});
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
//   const Handlechange = (event) => {
//     switch (event.target.name) {
//       case "title":
//         setTitle(event.target.value);
//         setTitleError(
//           event.target.value.length === 0 ? "please enter a recipe title" : null
//         );
//         break;

//       case "ingredient":
//         setTitle(event.target.value);
//         setTitleError(
//           event.target.value.length === 0
//             ? "please enter a recipe ingredient"
//             : null
//         );
//         break;

//       default:
//         break;
//     }
//     console.log(event.target.name);
//   };
//   const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   return (
//     <Container size="sm" className={classes.margin}>
//       <Typography
//         variant="h6"
//         color="textSecondary"
//         component="h2"
//         gutterBottom
//       >
//         Create a New Recipe
//       </Typography>

//       <form noValidate autoComplete="off" onSubmit={HandleSubmit}>
//         <div>
//           <TextField
//             className={classes.field}
//             name="title"
//             onChange={Handlechange}
//             label="Recipe Title"
//             variant="outlined"
//             color="secondary"
//             fullWidth
//             required
//             error={titleError}
//           />
//         </div>

//         <div>
//           <TextField
//             className={classes.field}
//             name="ingredient"
//             onChange={Handlechange}
//             label="Ingredient"
//             variant="outlined"
//             color="secondary"
//             multiline
//             minRows={4}
//             fullWidth
//             required
//             error={ingredientError}
//           />
//         </div>

//         <FormControl className={classes.field}>
//           <FormLabel>Recipe Category</FormLabel>
//           <RadioGroup
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <FormControlLabel
//               value="Egyption Recipes"
//               control={<Radio />}
//               label="Egyption Recipes"
//             />
//             <FormControlLabel
//               value="Italian Recipes"
//               control={<Radio />}
//               label="Italian Recipes"
//             />
//             <FormControlLabel
//               value="Asian Recipes"
//               control={<Radio />}
//               label="Asian Recipes"
//             />
//           </RadioGroup>
//         </FormControl>
//         <UploadButton />
//         {titleError && <Alert severity="error">{titleError}</Alert>}
//         {ingredientError && <Alert severity="error">{ingredientError}</Alert>}
//         {formError && <Alert severity="error">{formError}</Alert>}

//         <Button
//           type="submit"
//           color="primary"
//           variant="contained"
//           className={classes.btn}
//           startIcon={<SaveOutlinedIcon />}
//         >
//           Save
//         </Button>
//       </form>
//     </Container>
//   );
// };

// const mapStateToProps = (state) => {
//   return state;
// };

// export default connect(mapStateToProps)(CreationPage);
