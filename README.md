# react_front

## styled-components

css について基本的に styled-components を使用する。

- style が 2 つ以上の場合は styled を使用する。

  > 例：
  > const Wrapper = styled.div` color: #111; font-size: 12px;`

- style が１つの場合は css props を使用する。
  > 例：
  >
  > <div css={'color: blue'}></div>

※css props の使用方法
styled-components/macro を import する。

> 例：
> import 'styled-components/macro'

> × import styled from 'styled-components/macro'
