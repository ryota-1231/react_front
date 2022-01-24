import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`
const Sidebar = styled.div`
  width: 280px;
  background-color: #2587c0;
`
const MainContents = styled.div`
  width: calc(100vw - 280px);
  background-color: #fff;
`

export default function ChatSpaceMain () {
  return (
    <Wrapper>
      <Sidebar>
        sidebar
      </Sidebar>
      <MainContents>
        <Outlet />
      </MainContents>
    </Wrapper>
  )
}
