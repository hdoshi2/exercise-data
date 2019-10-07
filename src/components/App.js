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
    category: ''
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

  render() {
    const sortedExercises = this.getExercisesByMuscles()
    const { category } = this.state
    console.log("muscles", muscles)

    return (
      <Fragment>
        <Header />
        <Exercises exercises={sortedExercises} category={category} />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category} />
      </Fragment>
    );
  }
}

export default App;
