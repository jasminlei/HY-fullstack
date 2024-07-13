const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}
const Total = ({ exercise1, exercise2, exercise3 }) => {
  return (
    <div>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises} />
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  )
}

export default App