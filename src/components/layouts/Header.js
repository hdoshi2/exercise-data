import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" color="inherit">
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
