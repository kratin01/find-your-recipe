import SideBar from "./components/SideBar";
import FavPage from "./pages/FavPage";
import MainPage from "./pages/MainPage";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fav" element={<FavPage />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
