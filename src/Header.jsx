import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="title" color="inherit">
              Visual Regression Diff
            </Typography>
          </Grid>
          <Grid>
            <Button variant="contained" color="primary">
              <Icon>
                <i className="material-icons">thumb_up</i>
              </Icon>
              Accept All
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
