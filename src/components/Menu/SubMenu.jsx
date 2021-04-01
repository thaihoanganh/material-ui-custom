import { makeStyles, Grid } from "@material-ui/core";

const SubMenu = (props) => {
    const { children } = props;
    const classes = useState();

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {},
}));

export default SubMenu;
