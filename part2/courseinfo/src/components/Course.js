import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

const Header = ({ course }) => {
    return <h2>{course.name}</h2>
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = (props) => {
    return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = ({ course }) => {
    const exercises = course.parts.map(p => p.exercises)
    const total = exercises.reduce((sum, num) => sum + num, 0)
    return <p><strong>total of {total} exercises</strong></p>
}

export default Course 