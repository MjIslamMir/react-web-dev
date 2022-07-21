import React from 'react'
import './App.css'
//Class based Componet are stateful components
class App extends React.Component{
  state={
    val:5
  }
  obj={
    val:10
  }
  increment=()=>{
    this.obj.val+=1;
    console.log(this.obj.val);
  }
  //we can not update the state like obj but use setState
  updateState=()=>{
    this.setState({
      val:this.state.val+20 //state update enforces re-render call shouldUpdateComponenet() method to be true
    })
    console.log(this.state.val);
    //debugger
  }
  greeting=(user)=> {
    console.log(`hello welcome to React  ${user}`);
  }
  render(){
    return (<div>
      <h1>This is react class component</h1>
      <h2>Object value :{this.obj.val}</h2>
      {/* on click the Increment Object value is not updated in the UI */}
      <h2>State value :{this.state.val}</h2>
      {/* on click the Increment state value is  updated in the UI */}
      <button onClick={()=>this.greeting("Mujahidul Islam")}>Greet User Details</button>
      <br/>
      <button onClick={this.increment}>Increment Object Value</button>
      <br/>
      <button onClick={this.updateState}>Update State</button>
    </div> )

  }
}
export default App;
