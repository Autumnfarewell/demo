import React, { useState, useMemo } from 'react'
import { Radio } from 'antd'
import QCard from './components/QCard'
import QTable from './components/QTable'
import './styles.less'

export default function XForm (props) {
  const [size, setSize] = useState('card')

  return (
    <div>
      <Radio.Group 
        value={size} 
        onChange={(e) => setSize(e.target.value)}
        styleName="radio"
      >
        <Radio.Button value="card">卡片</Radio.Button>
        <Radio.Button value="table">列表</Radio.Button>
      </Radio.Group>

      {size === 'card' ? <QCard /> : <QTable />}
    </div>
  )
}


