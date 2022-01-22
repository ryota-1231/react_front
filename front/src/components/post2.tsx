import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Post2 () {
  const [message, setMessage] = useState('押してください')

  useEffect(() => {
    // サーバーアクセスなどのマウント後に実行したいコードはここ
    return () => {
      // 削除前に実行したいコードはここ
    }
  }, [])

  const handleClickData = () => {
    axios
      .get('http://localhost:1234/api/greeting')
      .then(results => {
        const data = results.data
        setMessage(data.message)
      })
  }

  return (
        <div className="panel">
            <div className="message">
              <Link to='/post'>Post</Link>
                <button onClick={handleClickData}>{message}</button>
            </div>
        </div>
  )
}
