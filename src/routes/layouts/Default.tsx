import Header from '@/components/Header'
import { Outlet, ScrollRestoration } from 'react-router'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
// Outlet 내용만 바뀌게 함
