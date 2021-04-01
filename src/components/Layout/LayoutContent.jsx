import { makeStyles, Grid } from "@material-ui/core";

const LayoutHeader = (props) => {
    const { children } = props;
    const classes = useState();

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default LayoutHeader;
