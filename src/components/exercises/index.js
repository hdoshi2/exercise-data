import React, { Fragment } from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    margin: 20,
    height: 500,
    overflowY: 'auto'
  }
}));

const Exercises = ({ exercises }) => {
  const classes = useStyles();
  return (
    <Grid container sm={12}>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            <Fragment>
              <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
                {group}
                <List component='ul'>
                  {exercises.map(({ title }) =>
                    <ListItem>
                      <ListItemText primary={title}>
                        TEST
                  </ListItemText>
                    </ListItem>
                  )}
                </List>
              </Typography>
            </Fragment>)}
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5">
            Welcome!
            </Typography>
          <Typography style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left
            </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
