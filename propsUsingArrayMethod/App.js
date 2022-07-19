const Courses = (props) => {
    console.log(props);
    const {name,exercises}=props;
    return ( <div>Name of the Course is :: {name} and number of Exercises are :: {exercises}</div> );
}

const App=() =>{ <div>Name of the Course is </div>
    const course = 'Full Stack application development';
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
      console.log(parts);
    //let Age=28;
    return (
        <>
        
            <p>Hello from the other Side</p>
            
            <h1>{course}</h1>
            <Courses name={parts[0].name} exercises={parts[0].exercises}/>
            {
            parts.map((val)=>
            <h5 key={val.name}> Name of the course is : {val.name} and number of exercises are : {val.exercises}</h5>)
            }
            </>
    );
}

export default App;
