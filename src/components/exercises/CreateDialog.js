import React, { Component, Fragment } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Fab,
  // TextField,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import Form from './Form'

const styles = theme => ({
  formControl: {
    width: 500
  },
})


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
    const { muscles, onCreate } = this.props

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
            <Form muscles={muscles} onSubmit={onCreate} />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }

}

export default withStyles(styles)(CreateDialog)
