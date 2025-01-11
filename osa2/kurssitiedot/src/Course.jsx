const Header = ({ course }) => <h2>{course.name}</h2>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ course }) => {
  return (
  <div>
    {course.parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
)};

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <Header course={course} />
      <Part course={course} />
      <Total sum={total} />
    </div>
  )
  }

export { Course };