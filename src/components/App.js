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
    return this.state.exercises
  }

  render() {
    console.log(this.getExercisesByMuscles())
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
