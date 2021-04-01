import { makeStyles, Grid } from "@material-ui/core";

const Layout = (props) => {
    const { children } = props;
    const classes = useState();

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {
        position: "absolute",
        display: "flex",
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
    },
}));

export default Layout;
