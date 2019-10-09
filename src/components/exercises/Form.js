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

  componentWillReceiveProps({ selectedExercise }) {
    this.setState({
      ...selectedExercise
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    //TODO: form validation
    const { title } = this.state
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
    const { title, description, muscles } = this.state,
      { classes, selectedExercise, muscles: categories } = this.props
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="muscles">
            Muscles
        </InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(category =>
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          className={classes.formControl}
          style={{ paddingBottom: 30 }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >
          {selectedExercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(Form)
