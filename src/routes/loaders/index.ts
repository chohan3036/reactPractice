import { redirect } from 'react-router'

interface Context {
  request: Request
}

export function requiresAuth({ request }) {
  const url = new URL(request.url)

  const accessToken = localStorage.getItem('accessToken')
  // await 복호화(accessToken)
  return accessToken ? true : redirect(`/signin?redirectTo=${url.pathname}`)
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken ? redirect('/') : true
}
