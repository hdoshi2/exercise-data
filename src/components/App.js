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

    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    // let initExercises = {}

    // let test = muscles.map(elem => {
    //   initExercises[elem] = []
    // })

    console.log('initExercises', initExercises)

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      exercises[muscles] = [...exercises[muscles], exercise]
      return exercises
    }, initExercises))
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }


  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(ex => ex.id === id)
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
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
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
        ...exercises.filter(ex => ex.id === exercise.id),
        exercise
      ]
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
