import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    label?: string;
};

export function Post (props: Props) {
  const [count, setCount] = useState(0)
  const { label } = props

  useEffect(() => {
    // サーバーアクセスなどのマウント後に実行したいコードはここ
    return () => {
      // 削除前に実行したいコードはここ
    }
  }, [])

  function onClick () {
    setCount(count + 1)
  }

  return (
    <div className="panel">
      <div className="message">
        <Link to='/post2'>Post 2</Link>
        <button onClick={onClick}>{label}</button>
      </div>
    </div>
  )
}

Post.defaultProps = {
  label: '押して下さい'
}
