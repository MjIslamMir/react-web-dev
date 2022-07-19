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
            {
            parts.map((val)=>
            <h5 key={val.name}> Name of the course is : {val.name} and number of exercises are : {val.exercises}</h5>)
            }
            </>
    );
}

export default App;
