import { makeStyles, Grid } from "@material-ui/core";

const LayoutMain = (props) => {
    const { children } = props;
    const classes = useState();

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
}));

export default LayoutMain;
