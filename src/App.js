import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ContactUs from "./pages/contact-us";
import Themes from "./pages/themes";
import NotFound from "./pages/errors/not-found";

import Navbar from "./components/nav-bar"
import Footer from "./components/footer";

import Func from "./functions";


import SVGSprites from "./components/svg-sprites";

function App() {
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    let theme = Func.getTheme();
    Func.applyTheme(theme);
    import(`./themes/theme${theme.name}${theme.isDark ? "-dark" : ""}/theme.scss`).then(() => setIsThemeLoaded(true));
  }, []);

  if (!isThemeLoaded) {
    return null;
  }

  return (
    <>
      <Navbar />
      <SVGSprites />

      <div className="content">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/themes" element={<Themes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>


      <Footer />
    </>
  );
}

export default App;
