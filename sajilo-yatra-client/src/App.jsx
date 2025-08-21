import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";

import NavBar from "./components/NavBar.jsx";

import VehiclesPage from "./pages/VehiclesPage.jsx";
import RoutesPage from "./pages/RoutesPage.jsx";
import FaresPage from "./pages/FaresPage.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/vehicles"
          element={<VehiclesPage />}
        />
        <Route
          path="/routes"
          element={<RoutesPage />}
        />
        <Route
          path="/home"
          element={<HomePage />}
        />

        <Route
          path="/fares"
          element={<FaresPage />}
        />

        <Route
          path="/feedback"
          element={<FeedbackPage />}
        />
      </Routes>
    </>
  );
};

export default App;
