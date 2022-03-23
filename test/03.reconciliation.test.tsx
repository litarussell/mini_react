/** @jsx createElement */
import { createElement, render } from '../src'

describe('test reconciliation', () => {
  let root
  beforeEach(() => {
    root = document.querySelector('#app')
    if (!root) {
      root = document.createElement('div')
      root.id = 'app'
      document.body.appendChild(root)
    }
  })

  test('replace div to span', () => {
    let element = <div>Foo</div>
    render(element, root)
    expect(root.innerHTML).toBe('<div>Foo</div>')
    const prevChild = root.firstElementChild
    element = <span>Foo</span>
    render(element, root)
    expect(root.innerHTML).toBe('<span>Foo</span>')
    const nextChild = root.firstElementChild
    expect(prevChild).not.toBe(nextChild)
  })

  test('reuse div', () => {
    let element = <div onClick={() => {}}>Foo</div>
    render(element, root)
    expect(root.innerHTML).toBe('<div>Foo</div>')
    const prevChild = root.firstElementChild
    element = <div onClick={() => {}}>Bar</div>
    render(element, root)
    expect(root.innerHTML).toBe('<div>Bar</div>')
    const nextChild = root.firstElementChild
    expect(prevChild).toBe(nextChild)
  })
})
