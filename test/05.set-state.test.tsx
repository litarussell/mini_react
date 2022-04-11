/** @jsx createElement */
import { Component, createElement, render } from '../src'

describe('test state component', () => {
  let root
  beforeEach(() => {
    root = document.querySelector('#app')
    if (!root) {
      root = document.createElement('div')
      root.id = 'app'
      document.body.appendChild(root)
    }
  })

  test('change state on click', () => {
    class FooComponent extends Component {
      constructor(props) {
        super(props)
        this.state = {
          count: 0,
        }
      }

      handleClick() {
        this.setState({
          count: this.state.count + 1,
        })
      }

      render() {
        return <div id="btn" onClick={() => this.handleClick()}>{this.state.count}</div>
      }
    }
    render(<FooComponent />, root)
    const el = root.querySelector('#btn')
    expect(root.innerHTML).toBe('<div id="btn">0</div>')
    el.click()
    expect(root.innerHTML).toBe('<div id="btn">1</div>')
  })

  test('reuse div', () => {
    class FooComponent extends Component {
      render() {
        return <div><b>{this.props.name}</b><a href="foo" /></div>
      }
    }
    render(<FooComponent name="Bar" />, root)
    expect(root.innerHTML).toBe('<div><b>Bar</b><a href="foo"></a></div>')
  })
})
