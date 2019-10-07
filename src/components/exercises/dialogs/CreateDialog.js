import React, { Component, Fragment } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


class CreateDialog extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const { open } = this.state
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
              Content
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained">
              Create
              </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }

}

export default CreateDialog
