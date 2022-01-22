import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function PostIndex () {
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <Outlet />
      <br />
      <button>
        <Link to='/'>Back</Link>
      </button>
    </div>
  )
}
