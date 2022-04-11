/** @jsx createElement */
import { Component, createElement, render } from '../src'

describe('test component', () => {
  let root
  beforeEach(() => {
    root = document.querySelector('#app')
    if (!root) {
      root = document.createElement('div')
      root.id = 'app'
      document.body.appendChild(root)
    }
  })

  test('render component', () => {
    class FooComponent extends Component {
      render() {
        return <div><b /><a href="foo" /></div>
      }
    }
    render(<FooComponent />, root)
    expect(root.innerHTML).toBe('<div><b></b><a href="foo"></a></div>')
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
