import React, { useState, useMemo, memo } from 'react'
import { Button, Image } from 'antd'
import useData from '@/pages/xform/useData'
import image from '@assets/image.jpg'
import './styles.less'

const isEqual = require('react-fast-compare');

export default memo(QCard, isEqual)
function QCard (props) {
  // 模拟数据
  // useMemo 缓存数据
  const { data } = useMemo(useData, [])

  return (
    <div styleName="grid-container">
      {
        data.map((dt, index) => {
          const { prjName, prjManager, prjStartDate, taskCount, taskDoneCount, 
            taskDoingCount } = dt
          return (
            <div styleName="grid-item" key={index}>
              <Image 
                width={55} 
                src={image} 
              />
              <dl>
                <dt>{prjName} <span>进行中</span></dt>
                <dd>项目经理: {prjManager}</dd>
                <dd>立项日期: {prjStartDate}</dd>
                <dd styleName="dd">
                  <div>
                    <span>任务: {taskCount}</span>
                    <span>完成: {taskDoneCount}</span>
                    <span>进行: {taskDoingCount}</span>
                  </div>
                  <div>⭐️</div>
                </dd>
              </dl>
            </div>
          )
        })
      }
    </div>
  )
}


