import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/homePage/homePage";
import CreationPage from "./pages/creationPage/creationPage";
import AllRecipesPage from "./pages/allRecipesPage/allRecipesPage";
import RecipeDetailsPage from "./pages/recipeDetailsPage/recipeDetailsPage";
import UpdatePage from "./pages/updatePage/updatePage";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "../src/redux/user/user.selectors";

import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/newRecipe" element={<CreationPage />} />
          <Route exact path="/recipes" element={<AllRecipesPage />} />
          <Route path="/recipes/update/:id" element={<UpdatePage />} />
          <Route path=":id" element={<RecipeDetailsPage />} />

          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
        {/* <Footer/> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
