import { Route, Routes, Outlet } from 'react-router-dom';
// import Pc from './Pc';
// import Phone from './Phone';

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <Outlet />
      {/* <Routes>
        <Route path="/pc" element={<Pc />} />
        <Route path='/phone' element={<Phone />} />
      </Routes> */}
    </div>
  )
}

export default Categories