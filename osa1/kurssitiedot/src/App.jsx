const Header = ({ course }) => {
  console.log("toimiiko")
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ part, exercises }) => {
  console.log("moii")
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Total = ({ exercise1, exercise2, exercise3 }) => {
  console.log("buu")
  return (
    <div>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

export default App