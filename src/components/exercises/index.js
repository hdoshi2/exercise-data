import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    margin: 20
  }
}));

const Exercises = () => {
  const classes = useStyles();
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <LeftPane classes={classes} />
      </Grid>
      <Grid item sm={6}>
        <RightPane classes={classes} />
      </Grid>
    </Grid>
  );
};

export default Exercises;
