import React, { memo } from 'react'
import { Table } from 'antd'
import useData from '@/pages/xform/useData'

const isEqual = require('react-fast-compare')

export default memo(QTable, isEqual)
function QTable (props) {
  const { columns, data = [] } = useData()

  return (
    <Table 
      dataSource={data} 
      columns={columns}
      rowKey="prjCategory"
    />
  )
}
