import React, { Component, Fragment } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  formControl: {
    width: 500
  },
})


class CreateDialog extends Component {
  state = {
    open: false,
    exerciseForm: {
      title: "",
      description: "",
      muscles: ""
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exerciseForm: {
        ...this.state.exerciseForm,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    //TODO: form validation
    const { exerciseForm } = this.state
    this.props.onCreate({
      ...exerciseForm,
      id: exerciseForm.title.toLocaleLowerCase().replace(/ /g, '-')
    })
    this.setState({
      open: false,
      exerciseForm: {
        title: "",
        description: "",
        muscles: ""
      }
    })
  }


  render() {
    const { open } = this.state
    const { classes, muscles } = this.props

    console.log('muscles', muscles)
    return (
      <Fragment>
        <Fab color="primary" size="small" onClick={this.handleToggle}>
          <AddIcon />
        </Fab>

        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a new exercise
            </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below:
              </DialogContentText>
            <form>
              <TextField
                label="Title"
                value={this.state.exerciseForm.title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.formControl}
              />
              <br />
              <TextField
                label="Description"
                value={this.state.exerciseForm.description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline
                className={classes.formControl}
              />
              <br />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="muscles">
                  Muscles
                </InputLabel>
                <Select
                  value={this.state.exerciseForm.muscles}
                  onChange={this.handleChange('muscles')}
                >
                  {muscles.map((item, id) => (
                    <MenuItem
                      value={item}
                      key={id}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>

          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }

}

export default withStyles(styles)(CreateDialog)
