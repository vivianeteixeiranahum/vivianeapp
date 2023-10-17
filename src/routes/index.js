import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../screens/HomeScreen";
import ContatoScreen from "../screens/ContatoScreen";
import SobreScreen from "../screens/SobreScreen";
import InicialScreen from "../screens/InicialScreen";
import ExercicioScreen from "../screens/ExercicioScreen";
function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<HomeScreen />} path="/" />
          <Route element={<InicialScreen />} path="/inicial" />
          <Route element={<SobreScreen />} path="/sobre" />
          <Route element={<ContatoScreen />} path="/contato" />
          <Route element={<ExercicioScreen />} path="/exercicio" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouter;
