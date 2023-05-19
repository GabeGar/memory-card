import Card from "../UI/Card/Card";
import classes from "./GameBoard.module.css";

const GameBoard = (props) => {
    const content = props.images.map((image) => {
        return (
            <Card key={image.id} onClick={props.cardClicked}>
                <img id={image.id} src={image.src} alt={image.alt} />
            </Card>
        );
    });

    return <div className={classes.gameboard}>{content}</div>;
};

export default GameBoard;
