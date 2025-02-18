import React from 'react'

const MainPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload();
    }

  return (
    <div>
      <nav>
        <h1>Buddy</h1>
        <button onClick={handleLogout}>
            Logout
        </button>
      </nav>
    </div>
  )
}

export default MainPage
