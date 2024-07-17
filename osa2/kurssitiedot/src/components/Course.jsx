const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

const Header = ({ courseName }) => {
    return (
        <h1>{courseName}</h1>
    )
}

const Content = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            {parts.map(part => (
                <div key={part.id}><p>{part.name} {part.exercises}</p></div>
            ))}
            <p><strong>total of {totalExercises} exercises</strong></p>


        </div>
    )
}


export default Course