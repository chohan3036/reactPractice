// Link component는 새로고침 없이 콘텐츠 가져옴
import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header>
      {navigations.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          className={({ isActive }) => {
            return isActive ? 'text-red-500' : ''
          }}>
          {nav.label}
        </NavLink>
      ))}
    </header>
  )
}
