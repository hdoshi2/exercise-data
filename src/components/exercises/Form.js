import React, { Component } from 'react'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  formControl: {
    width: 300
  },
})

class Form extends Component {
  state = this.getInitialState()

  getInitialState() {
    const { selectedExercise } = this.props
    return selectedExercise ? selectedExercise : {
      title: "",
      description: "",
      muscles: ""
    }
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    //TODO: form validation
    const { title, description, muscles } = this.state
    this.props.onSubmit({
      id: title.toLocaleLowerCase().replace(/ /g, '-')
    })
    this.setState({
      title: "",
      description: "",
      muscles: ""
    })
  }

  render() {
    const { classes, muscles } = this.props
    return (
      < div >
        < form >
          <TextField
            label="Title"
            value={this.state.title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.formControl}
          />
          <br />
          <TextField
            label="Description"
            value={this.state.description}
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
              value={this.state.muscles}
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
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </FormControl>
        </form >
      </div>
    )
  }
}

export default withStyles(styles)(Form)
