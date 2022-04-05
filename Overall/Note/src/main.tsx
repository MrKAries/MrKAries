import React from 'react'
import ReactDOM from 'react-dom'
import Index from './pages/Index'

import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from 'vite-plugin-qiankun/es/helper'

// 避免根 id #root 与其他的 DOM 冲突
const render: (props: QiankunProps) => void = props => {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>,
    container?.querySelector('#root') || document.querySelector('#root'),
  )
}

renderWithQiankun({
  bootstrap() {
    console.log('bootstrap')
  },
  mount(props) {
    console.log('mount', props)
    render(props)
  },
  unmount(props) {
    console.log('unmount', props)
    const { container } = props
    ReactDOM.unmountComponentAtNode(
      container?.querySelector('#root') || document.querySelector('#root')!,
    )
  },
})

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('qiankun')
} else {
  console.log('no qiankun')
  render({})
}
