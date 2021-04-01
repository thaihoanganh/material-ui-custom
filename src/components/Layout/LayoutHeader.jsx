import { makeStyles, Grid } from "@material-ui/core";

const LayoutHeader = (props) => {
    const { children } = props;
    const classes = useState();

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        height: theme.spacing(7),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

export default LayoutHeader;
