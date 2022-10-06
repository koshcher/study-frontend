import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const active = ({ isActive }) => isActive ? 'active-nav' : 'nav'

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px' }}>
      <NavLink className={active} to='/'>Bio</NavLink>
      <NavLink className={active} to='/pictures'>Pictures</NavLink>
      <NavLink className={active} to='/pictures/most-popular'>Most Popular</NavLink>

    </div>
  )
}

export default NavBar