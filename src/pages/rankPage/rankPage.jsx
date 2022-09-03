import React, { useState, useEffect } from "react";
import { axiosInstace } from "../../network/axiosConfig";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import "./rankPage.styless.scss";

const RankPage = (props) => {
    const [rank, setRank] = useState(0);
    let score = (props.score / 10) * 100;
    try {
        useEffect(() => {
            axiosInstace.post("rank", { score }).then((response) => {
                if (response.data.status === "success") {
                    setRank(response.data.data.rank)
                }
            });
        }, []);
    } catch (error) {
        console.log(error);
    }

    return (<Box sx={{ width: "100%" }} className="contain1">
        <Typography align="center" color="primary" variant="h5" >
            your is rank:{rank} 
        </Typography>
        
        <div>
            <Button align="center" variant="contained" onClick={() => {
                window.location.replace("/practice");
            }}>Try Again</Button>
        </div>
    </Box>
    );
};
export default RankPage;
