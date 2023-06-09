import { useEffect, useReducer, useState } from "react";

import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Gameboard from "./components/Gameboard/GameBoard";

import tyt from "../src/assets/videos/TYTP5.mp4";
import Images from "./utils/images";
import shuffleArray from "./utils/shufflearray";
import classes from "./App.module.css";
import Header from "./components/UI/Header/Header";

const initialScoresState = {
    score: 0,
    highScore: 0,
    currentId: null,
};

const gameScoreReducer = (state, action) => {
    if (action.type === "IMAGE_CLICKED" && state.currentId === null) {
        let setHighScore = state.highScore > 0 ? state.highScore : 1;

        return {
            score: state.score + 1,
            highScore: setHighScore,
            id: action.id,
        };
    }

    if (action.type === "IMAGE_CLICKED" && state.currentId !== null) {
        if (state.id === action.id) {
            return { ...initialScoresState, highScore: state.highScore };
        }

        if (state.id !== action.id) {
            let newScore = state.score + 1;

            let newHighScore =
                newScore > state.highScore ? newScore : state.highScore;

            return {
                score: newScore,
                highScore: newHighScore,
                id: action.id,
            };
        }
    }

    return initialScoresState;
};

const App = () => {
    const [images, setImages] = useState(Images);
    const [scoreState, dispatch] = useReducer(
        gameScoreReducer,
        initialScoresState
    );

    const { score, highScore } = scoreState;

    useEffect(() => {
        setImages((prevImages) => {
            return shuffleArray(prevImages);
        });
    }, [score]);

    const scoreLogicHandler = (e) => {
        dispatch({
            type: "IMAGE_CLICKED",
            id: e.target.id,
        });
    };

    const takeYourTime = (
        <video
            className={classes["bg-video"]}
            src={tyt}
            autoPlay
            loop
            muted
        ></video>
    );

    return (
        <>
            <div className={classes.background}>
                <Header />
                <ScoreBoard score={score} highScore={highScore} />
                <Gameboard images={images} cardClicked={scoreLogicHandler} />
                {takeYourTime}
            </div>
        </>
    );
};

export default App;
