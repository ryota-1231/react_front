import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import 'styled-components/macro'
import Color from '../../../styles/const/Color'
import ChatSpaceSidebar from './ChatSpaceSidebar'

const Sidebar = styled.div`
  width: 200px;
  background-color: ${Color.PRIMARY};
`

export default function ChatSpaceMain () {
  return (
    <div css={'display: flex;'}>
      <Sidebar>
        <ChatSpaceSidebar/>
      </Sidebar>
      <Outlet />
    </div>
  )
}
