import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export default function SignIn() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams() // Query 찾을 때~

  const redirectTo = searchParams.get('redirectTo')

  async function signIn() {
    if (id.trim() && pw.trim()) {
      // const { accessToken } = await 서버로 전송~
      const accessToken = 'fake-access-token-qwer1234'
      localStorage.setItem('accessToken', accessToken)
      navigate(redirectTo || '/')
    }
  }

  return (
    <>
      <h1>SignIn!!</h1>
      <form
        className="mx-auto flex max-w-[300px] flex-col gap-[10px]"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="ID"
          placeholder="ID를 입력하세요!"
          value={id}
          onChange={e => setId(e.target.value)}></TextField>
        <TextField
          label="PW"
          placeholder="비밀번호를 입력하세요!"
          value={pw}
          onChange={e => setPw(e.target.value)}></TextField>
        <Button onClick={() => signIn()}>로그인</Button>
      </form>
    </>
  )
}
