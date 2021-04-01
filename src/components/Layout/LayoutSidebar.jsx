import { makeStyles, Grid } from "@material-ui/core";

import { useLayout } from "@components/Layout";

const LayoutMain = (props) => {
    const { children } = props;
    const { isActiveSidebar } = useLayout();

    const classes = useState({ isActiveSidebar });

    return <Grid classes={classes}>{children}</Grid>;
};

const useState = makeStyles((theme) => ({
    root: {
        position: "fixed",
        overflow: "hidden",
        display: "flex",
        left: (props) => (props.isActiveSidebar ? 0 : -280),
        width: 280,
        minWidth: 280,
        height: "100%",
        borderRight: `1px solid ${theme.palette.divider}`,
        zIndex: 99,
        [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
            position: "initial",
            width: (props) => (props.isActiveSidebar ? 72 : 280),
            minWidth: (props) => (props.isActiveSidebar ? 72 : 280),
            height: "auto !important",
        },
    },
}));

export default LayoutMain;
