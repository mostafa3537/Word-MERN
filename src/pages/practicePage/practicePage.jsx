import React, { useState, useEffect } from "react";
import { axiosInstace } from "../../network/axiosConfig";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import ProgressMobileStepper from "../../components/progress/progress";
import RankPage from "../rankPage/rankPage";
import "./practicePage.styless.scss";

const PracticePage = () => {
    const [words, setWords] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const answerList = ["verb", "noun", "adjective", "adverb"]
    let [isStart, setIsStart] = useState(false);
    let [isCorrect, setIsCorrect] = useState("");
    let currentQuestion = words[questionNumber]
    let isnext = true;
    let progress = (questionNumber / 10) * 100;

    //fetch words from server
    try {
        useEffect(() => {
            axiosInstace.get("words").then((response) => {
                setWords(response.data.data.data);
            });
        }, []);
    } catch (error) {
        console.log(error);
    }

    if (questionNumber >= 10) {
        isnext = false
    }
    //check the selected answer to claculate score and give feedback
    function checkAnswer(word, answer) {
        if (isnext) {
            if (word.pos === answer.answer) {
                setCorrectAnswers(correctAnswers + 1);
                setIsCorrect(isCorrect = "Correct")
            } else {
                setIsCorrect(isCorrect = "Incorrect")
            }
        }
    }
    //to display questions one by one
    function setNextQuestion() {
        if (isnext) {
            setQuestionNumber(questionNumber + 1);
        }
    }
    //display loading while fetch data
    if (words.length === 0) {
        return (
            <Typography align="center" variant="h5" color="textSecondary">
                loading..
            </Typography>
        );
    } else {
        return (
            <Box sx={{ width: "100%" }} className="contain">
                <Stack spacing={1}>

                    {isnext ? (
                        <div key={currentQuestion.id} className="answer">
                            <Typography variant="h6" color="primary">
                                {questionNumber + 1}-please choose the correct category of the word
                                <span style={{ fontWeight: "bold" }}> {currentQuestion.word} </span>
                                from the follwing answers:
                            </Typography>
                            <br />
                            <Stack direction="row" spacing={8} >
                                {answerList.map((answer, index) => (
                                    < Chip
                                        label={answer}
                                        key={index}
                                        onClick={() => {
                                            checkAnswer(currentQuestion, { answer });
                                            setNextQuestion();
                                            setIsStart(isStart = true)
                                        }}
                                    />
                                ))}
                            </Stack>
                            {isStart ? <p>"{isCorrect}"</p> : ""}
                            <ProgressMobileStepper questionNumber={questionNumber} />
                            <Typography variant="h6" color="textSecondary">
                                {progress}%
                            </Typography>
                        </div>) : (
                        <RankPage score={correctAnswers}></RankPage>
                    )}
                </Stack>

            </Box>
        );
    }
};
export default PracticePage;
