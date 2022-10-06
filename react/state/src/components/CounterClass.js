import CounterBtn from "./ConterBtn"
import ConterShow from "./CounterShow"
import React from "react"

class CounterClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      hidden: false
    }
  }

  increment = (num) => {
    this.setState({
      count: this.state.count + num
    })
  }


  toggleHide = (num) => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  // 
  render() {
    return (
      <>
        <ConterShow hidden={this.state.hidden} count={this.state.count} />
        <div>
          <CounterBtn toggleHide={this.toggleHide} increment={this.increment} num={5} />
          <CounterBtn toggleHide={this.toggleHide} increment={this.increment} num={-10} />
          <CounterBtn toggleHide={this.toggleHide} increment={this.increment} num={15} />
        </div>
      </>
    )
  }
}

export default CounterClass