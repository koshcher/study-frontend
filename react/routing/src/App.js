import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Categories from './pages/categories/Categories';
import NotFound from './pages/NotFound';
import Trash from './pages/Trash';
import Pc from './pages/categories/Pc';
import Phone from './pages/categories/Phone';
import CategoriesIndex from './pages/categories/Index';
import Nav from './components/Nav';
import Product from './pages/categories/Product';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/categories' element={<Categories />} >
            <Route index element={<CategoriesIndex />} />
            <Route path='pc' element={<Pc />} />
            <Route path='phone' element={<Phone />} />
            <Route path=':brand' element={<Product />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
