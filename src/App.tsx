import { BrowserRouter, Routes, Route } from "react-router-dom"
import WebSiteLayout from "@/layout"
import TouristAttraction from "@/page/TouristAttraction"
import Festival from "@/page/Festival"
import Accommodation from "@/page/Accommodation"
import Tracking from "@/page/Tracking"
import Gallery from "@/page/Gallery"
import StartPage from "@/page/Start"
import TouristAttractionDetail from "@/page/TouristAttractionDetail"
import FestivalDetail from "@/page/FestivalDetail"
import AccommodatioDetail from "@/page/AccommodationDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route element={<WebSiteLayout />}>
          <Route path="TouristAttraction" element={<TouristAttraction />} />
          <Route path="Festival" element={<Festival />} />
          <Route path="Accommodation" element={<Accommodation />} />
          <Route path="Tracking" element={<Tracking />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="TouristAttraction/:id" element={<TouristAttractionDetail />} />
          <Route path="Festival/:id" element={<FestivalDetail />} />
          <Route path="Accommedation/:id" element={<AccommodatioDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
