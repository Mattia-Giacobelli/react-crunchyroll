import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import DefaultLayout from "./Layouts/DefaultLayout"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LatestPage from "./Pages/LatestPage";
import PopularPage from "./Pages/PopularPage";
import SimulcastPage from "./Pages/SimulcastPage";
import AnimesPage from "./Pages/AnimesPage";
import ReleasesPage from "./Pages/ReleasesPage";
import MusicPage from "./Pages/MusicPage";
import GenresPage from "./Pages/GenresPage";
import GenrePage from "./Pages/GenrePage";
import SearchPage from "./Pages/SearchPage";
import { AnimeProvider } from "./Contexts/AnimeContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {


  return (
    <>
      <AnimeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/latest" element={<LatestPage />} />
              <Route path="/popular" element={<PopularPage />} />
              <Route path="/simulcast" element={<SimulcastPage />} />
              <Route path="/animes" element={<AnimesPage />} />
              <Route path="/releases" element={<ReleasesPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/genres/:genre" element={<GenrePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimeProvider>
    </>
  )
}

export default App
