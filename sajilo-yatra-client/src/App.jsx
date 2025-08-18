import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NavBar from "./components/NavBar.jsx";
import About1 from "./pages/About1.jsx";
import About2 from "./pages/About2.jsx";


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        >
          <Route
            path="about1"
            element={<About1 />}
          />
          <Route
            index
            element={<p>Select an about...</p>}
          />
          <Route
            path="about2"
            element={<About2 />}
          />
        </Route>
        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
    </>
  );
};

export default App;
