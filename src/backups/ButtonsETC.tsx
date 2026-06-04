/*
생명주기 따라가보기
1) app 실행
2) useEffect 실행(콜백함수는 대기)
3) 리턴(렌더링)
4) 콜백함수 실행(1회)
*/

// app(부모)가 "검색"이라는 값을 Button(자식)에게 넣어줌
// 부모가 자식에게 값을 주는 방법
// 1) props를 활용(속성 부여), 그리고 내가 이름을 지을 수도 있음
// 2) slots(내용, contents)로 활용(children으로 받아짐)

import { useRef, useEffect } from 'react'
import Button from '@/components/Button'

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
      <Button variant="primary">검색</Button>
      <Button variant="primary">저장</Button>
      <Button variant="secondary">취소</Button>
      <Button
        variant="danger"
        loading={true}>
        삭제
      </Button>
      <Button>확인</Button>
    </>
  )
}
