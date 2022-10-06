import React from "react"

class ConterShow extends React.Component {
  render() {
    return (
      <div style={{ height: '70px' }}>
        <h1 hidden={this.props.hidden}>{this.props.count}</h1>
      </div>
    )
  }
}

export default ConterShow