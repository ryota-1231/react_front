import React from 'react'
import styled from 'styled-components'
import Color from '../../../styles/const/Color'
import Size from '../../../styles/const/Size'
import Label from '../../uiParts/Label'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${Color.SECONDLY};
  padding: 40px;
`
const MainContents = styled.div`
  width: 600px;
  height: 300px;
  margin: 40px auto;
  background-color: #fff;
  border: 1px solid ${Color.BORDER};
  border-radius: ${Size.BORDER_RADIUS};
`

export default function UserGroupView () {
  return (
    <Wrapper>
      <MainContents>
        <div>
          <Label value={'チャンネル名'} display={'block'} />
          <input></input>
        </div>
        <div>
          <Label value={'参加者'} display={'block'} />
          <input></input>
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </MainContents>
    </Wrapper>
  )
}
