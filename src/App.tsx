import { BrowserRouter, Routes, Route } from "react-router-dom";
import TouristAttraction from "@/page/TouristAttraction";
import Festival from "@/page/Festival";
import Accommodation from "@/page/Accommodation";
import Tracking from "@/page/Tracking";
import Gallery from "@/page/Gallery";
import StartPage from "@/page/Start";
import TouristAttractionDetail from "@/page/TouristAttractionDetail";
import FestivalDetail from "@/page/FestivalDetail";
import AccommodationDetail from "@/page/AccommodationDetail";
import MainPage from "@/page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/touristAttraction" element={<TouristAttraction />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/touristAttraction/:id"
          element={<TouristAttractionDetail />}
        />
        <Route path="/festival/:id" element={<FestivalDetail />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
