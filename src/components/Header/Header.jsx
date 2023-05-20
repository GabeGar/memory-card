import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <h2>Memory Card Game</h2>
            <div>
                <p>Click on any image below.</p>
                <p>Avoid clicking on the same image,</p>
                <p>immediately following a shuffle, to score.</p>
            </div>
        </div>
    );
};

export default Header;
