import { Component } from 'react'

class Class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      data: null,
      isLoading: true,
      error: null,
    }
  }

  setCount = (value) => this.setState({ count: value })

  loadData = () => {
    setTimeout(
      () =>
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then((json) => this.setState({ data: json }))
          .catch((e) => this.setState({ error: e.message }))
          .finally(() => this.setState({ isLoading: false })),
      1000,
    )
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    const { count, data, isLoading, error } = this.state

    if (isLoading) return 'Loading...'
    if (error) return `Error is ${error}`

    return (
      <div>
        <div>Count is {count}</div>
        <button onClick={() => this.setCount(count + 1)}>+</button>
        <br />
        <button onClick={() => this.setCount(count - 1)}>-</button>
        <br />
        <input
          value={count}
          onChange={({ target: { value } }) => this.setCount(+value)}
        />
        <div>{JSON.stringify(data)}</div>
      </div>
    )
  }
}

export default Class
