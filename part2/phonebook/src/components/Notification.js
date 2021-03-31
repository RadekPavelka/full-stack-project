import React from 'react'

const Notification = ({ message }) => {
  if ((message === null) || (!message.text)) {
    return null
  }

  const infoNotificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const errorNotificationStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }



  return (
    <div style={(message.type==='error') ? errorNotificationStyle : infoNotificationStyle} >
      {message.text}
    </div>
  )
}

export default Notification