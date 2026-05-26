import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Valeria from "./pages/Valeria";
import Agustina from "./pages/Agustina";
import Matias from "./pages/Matias";
import Luis from "./pages/Luis";
import JsonExplorer from "./pages/JsonExplorer";
import ApiPage from "./pages/ApiPage";
import Galeria from "./pages/Galeria";
import Bitacora from "./pages/Bitacora";
import Arquitectura from "./pages/Arquitectura";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="valeria" element={<Valeria />} />
          <Route path="agustina" element={<Agustina />} />
          <Route path="matias" element={<Matias />} />
          <Route path="luis" element={<Luis />} />

          <Route path="json" element={<JsonExplorer />} />
          <Route path="api" element={<ApiPage />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="bitacora" element={<Bitacora />} />
          <Route path="arquitectura" element={<Arquitectura />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;