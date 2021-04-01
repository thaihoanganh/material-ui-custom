// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

const Menu = (props) => {
    const { children, icon, path = "#", exact = false } = props;

    const classes = useStyles();

    return (
        <Grid className={classes.menuItem} component="li">
            <NavLink
                to={path}
                exact={exact}
                className={classes.menuItemLink}
                activeClassName={classes.menuItemLinkActive}
            >
                <Grid className={classes.menuItemIcon}>{icon}</Grid>
                <Grid className={classes.menuItemTitle}>{children}</Grid>
            </NavLink>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    menuItem: {
        listStyle: "none",
    },
    menuItemLink: {
        display: "flex",
        alignItems: "center",
        height: theme.spacing(6),
        paddingRight: theme.spacing(1.5),
        paddingLeft: theme.spacing(1.5),
        borderRadius: theme.spacing(0.5),
        textDecoration: "none",
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    },
    menuItemLinkActive: {
        backgroundColor: theme.palette.action.selected,
        "&:hover": {
            backgroundColor: theme.palette.action.selected,
        },
    },
    menuItemIcon: {
        marginRight: theme.spacing(2),
    },
    menuItemTitle: {
        overflow: "hidden",
        textOverflow: "hidden",
        whiteSpace: "nowrap",
    },
}));

export default Menu;
