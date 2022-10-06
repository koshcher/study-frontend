const { Component } = require("react");

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mas: [321, 213, 3]
    }
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(prevState)
  }

  componentWillUnmount() {
    console.log("unmount")
  }

  render() {
    const add = () => {
      const num = Math.floor(Math.random() * 100)
      this.setState({
        mas: [...this.state.mas, num]
      })
    }

    return (
      <div>
        {this.state.mas.map((e, i) => <div key={i}>{e}</div>)}
        <button onClick={add}>add</button>
      </div>
    )
  }

}

export { ToDo }