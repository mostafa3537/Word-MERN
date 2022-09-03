import React from "react";
import Typography from "@material-ui/core/Typography";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <Typography align="center" variant="h5" color="textSecondary">
                In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
                Examples of part of speech: (noun, verb, adjective, ...)
            </Typography>
            <Typography align="center" variant="h5" color="textSecondary">
                this website helps the students practice categorizing a set of words according to
                their part of speech.
            </Typography>

        </div>
    </div>
);

export default HomePage;
