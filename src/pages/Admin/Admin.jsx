import React from 'react'

function Admin(props) {
  const handleClick = () => {
    console.log(new Date().getFullYear())
  }
  setInterval(() => {
    console.log(new Date().getFullYear())
  }, 3000)
  return (
    <div>
      <button onClick={handleClick}>au</button>
    </div>
  )
}

export default Admin
