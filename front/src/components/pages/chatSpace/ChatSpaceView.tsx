import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
`
const MainContents = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 24px;
`
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  word-spacing: 2rem;
  text-align: center;
`
const Content = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
`

export default function ChatSpaceMain () {
  return (
    <Wrapper>
      <MainContents>
        <Title>Chat</Title>
        <Content>
          view
        </Content>
      </MainContents>
    </Wrapper>
  )
}