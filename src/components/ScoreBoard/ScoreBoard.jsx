import classes from "./ScoreBoard.module.css";

const ScoreBoard = (props) => {
    return (
        <div className={classes.scoreboard}>
            <div className={classes["score-info"]}>
                Current Score:
                <div>{props.score}</div>
            </div>{" "}
            <div className={classes["score-info"]}>
                Highest Score:
                <div>{props.highScore}</div>
            </div>
        </div>
    );
};

export default ScoreBoard;
