import { makeStyles, Grid } from "@material-ui/core";

const Menu = (props) => {
    const { children } = props;
    const classes = useState();

    return (
        <Grid classes={classes} component="ul">
            {children}
        </Grid>
    );
};

const useState = makeStyles((theme) => ({
    root: {
        overflow: "hidden",
        margin: 0,
        marginTop: 56,
        width: "100%",
        padding: theme.spacing(1.5),
    },
}));

export default Menu;
