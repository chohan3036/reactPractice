import { useState } from 'react'

export default function App() {
  //const fruits = ['사과', '바나나', '체리', '망고']
  const [fruits, setFruits] = useState(['사과', '망고', '바나나'])
  const [text, setText] = useState('')

  return (
    <>
      <h1>과일 리스트</h1>
      <input
        value={text}
        onChange={event => setText(event.target.value)}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') {
            setFruits([text, ...fruits])
            setText('')
          }
        }}
      />
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}

/*
1) map 함수를 사용한다
2) return 값에서 고유한 key가 필수임
*/
