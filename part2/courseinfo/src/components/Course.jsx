const Header = ({text}) => {
    return (
      <h1>
        {text}
      </h1>
    )
  }
  
  const Part = ({name, exercises}) => {
    return (
      <div>
        {name} {exercises}
      </div>
    )
  }
  
  const Sum = ({value}) => {
    return (
      <div><b>
          total of {value} exercises
        </b>
      </div>
    )
  }
  
  const Content = ({parts}) => {
  
    const getTotal = ({parts}) => parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises,0)
  
  
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        <Sum value={getTotal({parts})} />
      </div>
    )
  }
  
  
  const Course = ({courses}) => {
    return (
      <div>
        {courses.map(course=> 
          <div>
            <Header key={course.id} text={course.name} />
            <Content key={course.id} parts={course.parts} />
          </div>
        )}
      </div>
    )
  }


export default Course