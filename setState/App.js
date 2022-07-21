import React from 'react'
import './App.css'
import Myname from './components/Myname'
//Class based Componet are stateful components
//Counter App
class App extends React.Component{
  state={
    val:0
  }
  incrementCounter=()=>{
    this.setState({
      val:this.state.val+1
    })
    //setInterval(this.incrementCounter,2000)

  }
  decrementCounter=()=>{
    this.setState({
      val:this.state.val-1
    })
  }
  reset=()=>{
    this.setState({
      val:0
    })
  }
  render(){
    return (<div>
    <Myname data="Mujahi dul Islam"/>
    <h1>Counter Value :: {this.state.val}</h1>
    <button onClick={this.incrementCounter}>increment Counter</button><br/>
    <button onClick={this.decrementCounter}>Decrement Counter</button><br/>
    <button onClick={this.reset}>Reset Counter</button>
    </div> )

  }
}
export default App;
