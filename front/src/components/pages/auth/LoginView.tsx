import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import googleIcon from '../../../assets/images/icons/google_icon_01.png'
import twitterIcon from '../../../assets/images/icons/twitter_icon_01.png'
import lineIcon from '../../../assets/images/icons/line_icon_01.png'

const Wrapper = styled.div`
  display: flex;
  height: 380px;
`
const MailContents = styled.div`
  width: 50%;
  padding: 60px 45px 40px;
  position: relative;
  &::after {
    content: '';
    width: 1px;
    height: 360px;
    position: absolute;
    top: 10px;
    right: 0;
    background-color: #d4d4d4;
  }
`
const InputContent = styled.div`
  margin-bottom: 30px;
`
const Label = styled.label`
  display: block;
  font-size: 16px;
`
const Input = styled.input`
  border: 1px solid #b9b9b9;
  border-radius: 4px;
  height: 30px;
  width: 100%;
`
const Button = styled.button`
  width: 100%;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  height: 46px;
  &:hover {
    cursor: pointer;
  }
`
const LoginLink = styled(Link)`
  display: inline-block;
  height: 100%;
  width: 100%;
`
const LoginButton = styled(Button)`
  background-color: #2587c0;
  color: #fff;
  &:hover {
    background-color: #2587c0ea;
  }
`
const LinkContent = styled.div`
  margin-top: 16px;
  text-align: center;
`
const PasswordForgetLink = styled(Link)`
  font-size: 14px;
  color: #2587c0;
`
const SnsContents = styled.div`
  width: 50%;
  padding: 84px 45px 40px;
`
const ButtonContent = styled.div`
  width: 100%;
  margin-bottom: 26px;
  position: relative;
`
const GoogleButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #b9b9b9;
`
const TwitterButton = styled(Button)`
  background-color: #159cf0;
  color: #fff;
`
const LineButton = styled(Button)`
  background-color: #06C755;
  color: #fff;
`
const Image = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
`
const GoogleImage = styled(Image)`
  width: 36px;
  height: 36px;
  top: 5px;
  left: 5px;
`

export default function LoginView () {
  return (
    <Wrapper>
      <MailContents>
        <InputContent>
          <Label>メールアドレス</Label>
          <Input type='text'></Input>
        </InputContent>
        <InputContent>
          <Label>パスワード</Label>
          <Input type='text'></Input>
        </InputContent>
        <div>
          <LoginLink to={'/chat_space'}>
            <LoginButton>ログイン</LoginButton>
          </LoginLink>
          <LinkContent>
            <PasswordForgetLink to={'/auth'}>パスワードをお忘れの方はこちら</PasswordForgetLink>
          </LinkContent>
          <LinkContent>
            <Link to={'/auth/signup'}>初めての方はこちら</Link>
          </LinkContent>
        </div>
      </MailContents>
      <SnsContents>
        <ButtonContent>
          <GoogleImage src={googleIcon} alt="google_icon" />
          <GoogleButton>Googleでログイン</GoogleButton>
        </ButtonContent>
        <ButtonContent>
          <Image src={twitterIcon} alt="twitter_icon" />
          <TwitterButton>Twitterでログイン</TwitterButton>
        </ButtonContent>
        <ButtonContent>
          <Image src={lineIcon} alt="line_icon" />
          <LineButton>LINEでログイン</LineButton>
        </ButtonContent>
      </SnsContents>
    </Wrapper>
  )
}
