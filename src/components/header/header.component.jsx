import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ hidden, sections }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user_token")
  );

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span className="logo">Cooking Recipes</span>
      </Link>
      <div className="options ">
        <Link className="option " to="/allRecipes">
          All Recipes
        </Link>
        <Link className="option " to="/newRecipe">
          Create Recipe
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              setCurrentUser(localStorage.removeItem("user_token"));
              navigate(`/signin`);
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
