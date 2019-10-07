import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "./store.js"
import { returnStatement } from "@babel/types";

// const App = () => {
//   return <div>Hi from React!</div>;
// };

class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises
    }, {}))
  }

  render() {
    const sortedExercises = this.getExercisesByMuscles()
    return (
      <Fragment>
        <Header />
        <Exercises exercises={sortedExercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
