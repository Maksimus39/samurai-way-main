import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={classes.link} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink} className={classes.link}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink} className={classes.link}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/musik" activeClassName={classes.activeLink} className={classes.link}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink} className={classes.link}>Settings</NavLink>
            </div>
        </nav>
    )
}