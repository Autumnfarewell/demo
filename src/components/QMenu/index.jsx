import React, { useState } from 'react'
import { Menu } from 'antd'
import { history, useLocation } from 'umi'
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons' // icon

export default function QMenu (props) {
  const { onClick } = props
  let { pathname } = useLocation() // 获取 location 参数
  const [x, setX] = useState([pathname])
  const [openKeys, setOpenKeys] = useState(['sub1'])

  function getItem (label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const items = [
    getItem('张景博', 'sub1', <AppstoreOutlined />, [
      getItem('卡片', '/'),
      getItem('parseUrl', '/home'),
      getItem('三级联动', '/city'),
    ]),
  ]

  // 一级菜单的 key
  const root = ['1', '2', 'sub1', 'sub2']

  const onOpenChange = keys => {
    const value = keys.find(key => !openKeys.includes(key))
    if (!root.includes(value)) {
      setOpenKeys(keys)

    } else {
      setOpenKeys(value ? [value] : [])
    }
  }

  const onSelect = opt => {
    const { selectedKeys, key } = opt
    onClick(opt)
    setX(selectedKeys) // 选中
    history.push(key)
  }

  return (
    <Menu
      style={{width: 256}}
      selectedKeys={x} // 初始选中的菜单项 key 数组
      openKeys={openKeys} // 初始展开的 SubMenu 菜单项 key 数组
      mode="inline"
      onSelect={onSelect} // 
      onOpenChange={onOpenChange}
      theme="light"
      items={items}
    />
  )
}

