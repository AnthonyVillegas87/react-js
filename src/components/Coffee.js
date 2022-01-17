import classes from "./coffee.module.css";
const Coffee = props => {
    return (
        <>
            <h1>My Coffee List!</h1>
            <p className={classes.espresso}>{props.name}</p>
        </>

    )
}

export default Coffee;

