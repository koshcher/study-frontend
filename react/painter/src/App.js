import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";
import MostPopularPicture from "./pages/pictures/MostPopularPicture";
import PictureList from "./pages/pictures/PictureList";
import SinglePicture from "./pages/pictures/SinglePicture";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/pictures">
            <Route index element={<PictureList />} />
            <Route path=":name" element={<SinglePicture />} />
            <Route path="most-popular" element={<MostPopularPicture />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
