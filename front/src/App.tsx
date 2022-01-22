import React from 'react'
import './App.css'
import { Navigate, useRoutes } from 'react-router-dom'
import { Post } from './components/post'
import { Post2 } from './components/post2'
import PageNotFoundView from './components/pages/PageNotFoundView'
import { PostIndex } from './components/pages/postIndex'

function App () {
  const mainRoutes = {
    path: '/',
    element: <PostIndex />,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '/', element: <Post /> },
      { path: 'post', element: <Post /> },
      { path: 'post2', element: <Post2 /> },
      { path: '404', element: <PageNotFoundView /> },
      { path: 'account', element: <Navigate to='/account/list' /> }
    ]
  }

  // const accountRoutes = {
  //   path: 'account',
  //   element: <AccountLayout />,
  //   children: [
  //     {path: '*', element: <Navigate to='/404' />},
  //     {path: ':id', element: <AccountDetailView />},
  //     {path: 'add', element: <AccountAddView />},
  //     {path: 'list', element: <AccountListView />},
  //   ],
  // };

  // const routing = useRoutes([mainRoutes, accountRoutes]);
  const routing = useRoutes([mainRoutes])

  return <>{routing}</>
}

export default App
