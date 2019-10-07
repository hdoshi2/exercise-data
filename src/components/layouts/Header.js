import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from '../exercises/dialogs/CreateDialog'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" style={{flex: 1}}>
          Exercise Builder
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
