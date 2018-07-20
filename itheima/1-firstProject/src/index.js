// 1. 导入包
// import React, {Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

import BindEvent from '@/components/01.react-base/BindInputValue'

// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  <BindEvent></BindEvent>
</div>, document.getElementById('app'))
