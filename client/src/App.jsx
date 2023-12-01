import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import NotFound from "./pages/notfound.jsx";
import Register from "./pages/register.jsx";
import Information from "./pages/Information.jsx";
import Store from "./pages/store.jsx";
import { LoadScript } from "@react-google-maps/api";

const MAP_LIBRARIES = ["places"];

const App = () => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <LoadScript
        key={googleMapsApiKey}
        googleMapsApiKey={googleMapsApiKey}
        libraries={MAP_LIBRARIES}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoadScript>
    </div>
  );
};

export default App;
