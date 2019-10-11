import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "./store.js"


class App extends Component {
  state = {
    exercises,
    category: '',
    selectedExercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    )

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
      }, initExercises)
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }


  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  }

  handleExerciseCreate = exercise => {
    console.log('ex..', exercise)
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises, selectedExercise }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      selectedExercise: selectedExercise.id === id ? {} : selectedExercise
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      selectedExercise: { exercise }
    }))
  }

  render() {
    const sortedExercises = this.getExercisesByMuscles()
    const { category, selectedExercise, editMode } = this.state
    console.log("muscles", muscles)
    console.log("category", category)


    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercises={sortedExercises}
          selectedExercise={selectedExercise}
          category={category}
          muscles={muscles}
          editMode={editMode}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category} />
      </Fragment>
    );
  }
}

export default App;
