import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "./store.js"

// const App = () => {
//   return <div>Hi from React!</div>;
// };

class App extends Component {
  state = {
    exercises,
    category: '',
    selectedExercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises
    }, {}))
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }


  handleExerciseSelected = id => {
    this.setState(({exercises}) => ({
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

  render() {
    const sortedExercises = this.getExercisesByMuscles()
    const { category, selectedExercise } = this.state
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
          onSelect={this.handleExerciseSelected}
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
