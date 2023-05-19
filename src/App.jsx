import { useEffect, useReducer, useState } from "react";

import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import Gameboard from "./components/Gameboard/GameBoard";

import tyt from "../src/assets/videos/TYTP5.mp4";
import Images from "./utils/images";
import shuffleArray from "./utils/shufflearray";
import classes from "./App.module.css";

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
            return { score: 0, highScore: state.highScore, currentId: null };
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

    const handleGameLogic = (e) => {
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
                <h1 className={classes.title}>Memory Card Game</h1>
                <ScoreBoard score={score} highScore={highScore} />
                <Gameboard images={images} cardClicked={handleGameLogic} />
                {takeYourTime}
            </div>
        </>
    );
};

export default App;
