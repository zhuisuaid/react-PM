import React, { Component } from 'react'

export default class App extends Component {
  state={
    count:0
  }
  increase=()=>{
      const number=this.refs.numberSelect.value*1;
      this.setState({
        count:this.state.count+number
      })
  }
  reduce=()=>{
    const number=this.refs.numberSelect.value*1;
    this.setState({
      count:this.state.count-number
    })
  }
  increaseIfOdd=()=>{
    const number = this.refs.numberSelect.value*1;
    const count = this.state.count
    if(count%2===1){
      this.setState({
        count:count+number
      })
    }
  }
  increaseAsync=()=>{
    const number = this.refs.numberSelect.value*1;
    const {count} = this.state;
    setTimeout(()=>{
      this.state({
        count:count+number
      })
    },1000)
  }
  render() {
    const {count}=this.state
  
    return (
      <div>
        <p>click {count} time</p><br/>
        <select ref='numberSelect'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.increase}>+</button>
        <button onClick={this.reduce}>-</button>
        <button onClick={this.increaseIfOdd}>increase If Odd</button>
        <button onClick={this.increaseAsync}>increase Async</button>
      </div>
    )
  }
}
