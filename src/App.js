import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import GalleriaFilm from "./components/GalleriaFilm";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import PaginaProfilo from "./components/PaginaProfilo";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          <header>
            <MyNav />
          </header>
          <div className="flex-grow-1">
            <main>
              <Routes>
                <Route path="/" element={<GalleriaFilm />} />
                <Route path="/TV-Show" element={<TVShows />} />
                <Route path="/Profile" element={<PaginaProfilo />} />
                <Route
                  path="/movie-details/:movieId"
                  element={<MovieDetails />}
                />
              </Routes>
            </main>
          </div>
          <footer>
            <MyFooter />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
