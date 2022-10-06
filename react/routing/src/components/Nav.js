import { NavLink } from 'react-router-dom'

const Nav = () => {
  const active = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <NavLink className={active} to='/'>Main</NavLink>
      <NavLink className={active} to='/trash'>Trash</NavLink>
      <NavLink className={active} to='/categories'>Categories</NavLink>
    </div>
  )
}

export default Nav