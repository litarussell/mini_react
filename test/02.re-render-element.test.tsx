/** @jsx createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, render } from '../src'

describe('test re-render-element', () => {
  let root
  beforeEach(() => {
    root = document.getElementById('root')
    if (!root) {
      root = document.createElement('div')
      root.id = 'root'
      document.body.appendChild(root)
    }
  })

  test('render jsx div', () => {
    const element = <div>Foo</div>
    render(element, root)
    expect(root.innerHTML).toBe('<div>Foo</div>')
    render(element, root)
    expect(root.innerHTML).toBe('<div>Foo</div>')
  })
})
