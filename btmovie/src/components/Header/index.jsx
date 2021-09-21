import {
  AppBar, IconButton, Toolbar, Typography,
  withStyles
} from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./style";

class Header extends Component {
  logout = () => {
    localStorage.removeItem("t");
  };
  render() {
    const { title, navLink, active, relative, profile } = this.props.classes;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ImportContacts />
          </IconButton>
          <Typography className={title} variant="h6">
            Movie
          </Typography>

          <NavLink className={navLink} exact activeClassName={active} to="/">
            Home
          </NavLink>

          {this.props.me ? (
            <div className={relative}>
              <NavLink
                className={navLink}
                activeClassName={active}
                to="/profile"
              >
                Hello , {this.props.me.hoTen}
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink
                className={navLink}
                activeClassName={active}
                to="/signin"
              >
                Sign in
              </NavLink>
              <NavLink
                className={navLink}
                activeClassName={active}
                to="/signup"
              >
                Sign up
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.me,
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Header)
);
