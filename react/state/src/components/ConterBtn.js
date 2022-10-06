import React from "react"

class CounterBtn extends React.Component {

  incrementBtn = () => {
    this.props.increment(this.props.num)
    //this.props.toggleHide()
  }

  render() {
    return (
      <button onClick={this.incrementBtn} style={{ height: '50px' }}>{this.props.num}</button>
    )
  }
}

export default CounterBtn