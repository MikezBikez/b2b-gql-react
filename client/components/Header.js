import React from 'react'

const Header = (props) => {

  const onWhosIn = () => props.history.push('/people/whosIn')
  const onCheckin = () => props.history.push('/people/checkIn')
  const onPeopleList = () => props.history.push('/people/list')
  const onHome = () => props.history.push('/')

  return (
    <nav>
      <div className="nav-wrapper">
        <a onClick={onHome} className="brand-logo">Back to Bikes</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={onWhosIn}>Who's In Today</a></li>
          <li><a onClick={onCheckin}>Check In</a></li>
          <li><a onClick={onPeopleList}>The Gang</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header