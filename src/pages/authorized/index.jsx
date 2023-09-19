import React, { useEffect } from 'react'
import { Redirect, getDvaApp } from 'umi'
import { connect } from 'dva'


// user/abc
export default function Authorized (props) {
	// false
	if (localStorage.getItem('token')) {
		return props.children
	}
	// 从 abc -> login
	return <Redirect to="/user/login" />
}
