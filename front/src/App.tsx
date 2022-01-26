import React from 'react'
import './App.css'
import './styles/common.css'
// v6
import { Navigate, useRoutes } from 'react-router-dom'
// Auth
import AuthMain from './components/pages/auth/AuthMain'
import LoginView from './components/pages/auth/LoginView'
import SignupView from './components/pages/auth/SignupView'
// ChatSpace
import ChatSpaceMain from './components/pages/chatSpace/ChatSpaceMain'
import ChatSpaceView from './components/pages/chatSpace/ChatSpaceView'
// User
import UserGroupView from './components/pages/user/UserGroupView'
import UserMain from './components/pages/user/UserMain'
import UserView from './components/pages/user/UserView'
// NotFound
import NotFound from './components/pages/error/NotFound'

function App () {
  const authRoutes = {
    path: 'auth',
    element: <AuthMain />,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '', element: <Navigate to='/auth/login' /> },
      { path: 'login', element: <LoginView /> },
      { path: 'signup', element: <SignupView /> },
      { path: '404', element: <NotFound /> }
    ]
  }

  const chatSpaceRoutes = {
    path: 'chat_space',
    element: <ChatSpaceMain />,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '', element: <ChatSpaceView/> },
      { path: '404', element: <NotFound /> }
    ]
  }

  const userRoutes = {
    path: 'user',
    element: <UserMain />,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '', element: <UserView/> },
      { path: 'group', element: <UserGroupView /> },
      { path: '404', element: <NotFound /> }
    ]
  }

  const routing = useRoutes([authRoutes, chatSpaceRoutes, userRoutes])

  return <>{routing}</>
}

export default App
