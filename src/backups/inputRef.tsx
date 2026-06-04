/*
생명주기 따라가보기
1) app 실행
2) useEffect 실행(콜백함수는 대기)
3) 리턴(렌더링)
4) 콜백함수 실행(1회)
*/

import { useRef, useEffect } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  // useEffect는 app 다 실행되고 렌더링까지 끝나면 1번 실행함
  useEffect(() => {
    // ? << optional chaning, 값이 있으면 실행해라
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
      />
      <button>검색</button>
    </>
  )
}
