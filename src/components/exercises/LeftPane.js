import React from "react";
import { Paper } from "@material-ui/core";

const LeftPane = props => {
  const { classes } = props;
  return <Paper className={classes.paper}>Left Pane</Paper>;
};

export default LeftPane;
