import React from 'react'
import QMenu from '@@@/QMenu'
import './styles.less'

export default function BasicLayout (props) {
  return (
		<div styleName="basic-layout">
			<QMenu 
				onClick={() => {}}
			/>
			<div styleName="box">{props.children}</div>
		</div>
  )
}
