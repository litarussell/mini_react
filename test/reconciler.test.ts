import { render } from '../src'

describe('test render', () => {
  let root
  beforeEach(() => {
    root = document.createElement('div')
    document.body.appendChild(root)
  })
  afterEach(() => {
    root.innerHTML = ''
    document.body.removeChild(root)
  })

  test('render div', () => {
    const element = {
      type: 'div',
      props: {},
    }
    render(element, root)
    expect(root.innerHTML).toBe('<div></div>')
  })

  test('render div with children', () => {
    const element = {
      type: 'div',
      props: {
        children: [
          { type: 'b', props: {} },
          { type: 'a', props: { href: 'foo' } },
        ],
      },
    }
    render(element, root)
    expect(root.innerHTML).toBe('<div><b></b><a href="foo"></a></div>')
  })

  test('render div with props', () => {
    const element = {
      type: 'div',
      props: { id: 'foo' },
    }
    render(element, root)
    expect(root.innerHTML).toBe('<div id="foo"></div>')
  })

  test('render span with text child', () => {
    const element = {
      type: 'span',
      props: {
        children: [
          {
            type: 'TEXT ELEMENT',
            props: { nodeValue: 'Foo' },
          },
        ],
      },
    }
    render(element, root)
    expect(root.innerHTML).toBe('<span>Foo</span>')
  })

  // test('render span with text child', () => {
  //   const element = {
  //     type: 'span',
  //     props: {
  //       children: [
  //         {
  //           type: 'TEXT ELEMENT',
  //           props: { nodeValue: 'Foo' },
  //         },
  //       ],
  //     },
  //   }
  //   render(element, root)
  //   expect(root.innerHTML).toBe('<span>Foo</span>')
  // })
})
