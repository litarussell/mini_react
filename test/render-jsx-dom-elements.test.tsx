/** @jsx createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, render } from '../src'

describe('test createElement', () => {
  let root
  beforeEach(() => {
    root = document.createElement('div')
    document.body.appendChild(root)
  })

  afterEach(() => {
    root.innerHTML = ''
    document.body.removeChild(root)
  })

  test('render jsx div', () => {
    const element = <div />
    render(element, root)
    expect(root.innerHTML).toBe('<div></div>')
  })

  test('render div with children', () => {
    const element = <div><b /><a href="foo" /></div>
    render(element, root)
    expect(root.innerHTML).toBe('<div><b></b><a href="foo"></a></div>')
  })

  test('render div with props', () => {
    const element = <div id="foo" />
    render(element, root)
    expect(root.innerHTML).toBe('<div id="foo"></div>')
  })

  test('render span with text child', () => {
    const element = <span>Foo</span>
    render(element, root)
    expect(root.innerHTML).toBe('<span>Foo</span>')
  })
})
