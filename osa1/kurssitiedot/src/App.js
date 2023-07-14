const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.data.part} {props.data.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part data={props.parts[0]}/>
      <Part data={props.parts[1]}/>
      <Part data={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.a+props.b+props.c}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ]}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total a={course.parts[0].exercises} b={course.parts[1].exercises} c={course.parts[2].exercises} />
    </div>
  )
}

export default App