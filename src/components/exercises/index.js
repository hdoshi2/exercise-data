import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteForever, Edit } from '@material-ui/icons'
import Form from './Form'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    margin: 20,
    height: 500,
    overflowY: 'auto'
  }
}));

const Exercises = ({
  exercises,
  category,
  onSelect,
  selectedExercise,
  selectedExercise: {
    id = "",
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left'
  },
  onDelete,
  onSelectEdit,
  editMode,
  muscles,
  onEdit
}) => {
  console.log('exercises', exercises)
  const classes = useStyles();
  return (
    <Grid container sm={12} item={true}>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(([group, groupedExercises], id) =>
            !category || category === group
              ? <Fragment key={id}>
                <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
                  {group}
                  <List component='ul'>
                    {groupedExercises.map(({ title, id }) =>
                      <ListItem button key={id}>
                        <ListItemText primary={title} onClick={() => onSelect(id)}>
                        </ListItemText>
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)}>
                            <DeleteForever />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </List>
                </Typography>
              </Fragment>
              : null)}
        </Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          {editMode
            ? <Form
                muscles={muscles}
                onSubmit={onEdit}
                selectedExercise={selectedExercise}
              /> :
            <Fragment>
              <Typography variant="h5">
                {title}
              </Typography>
              <Typography style={{ marginTop: 20 }}>
                {description}
              </Typography>
            </Fragment>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
