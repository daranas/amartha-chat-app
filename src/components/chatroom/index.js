import React, { Component } from 'react';
import { logout } from '../../helpers/auth'

export default class Chatroom extends Component {
render () {
return (
<div>
<button
style={{border: 'none', background: 'transparent'}}
onClick={() => {
logout()
}}
className="navbar-brand">Logout</button>
Dashboard. This is a protected route. You can only see this if you're authed.
</div>
)
}
}