import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import recipesReducer from "./recipe/recipe.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipesReducer,
});

export default rootReducer;
