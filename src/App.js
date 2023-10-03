import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import Routers from "./Routes/index.js";
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const lang = useSelector((state) => state.language.current_lang);
  const [contextLang, setContextLang] = useState("fr");
  const [contextthem, setContexttheme] = useState("fr");

  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <ThemeContext.Provider value={{ contextthem, setContexttheme }}>
            <div
              className={`${
                lang === "ar" ? "text-right" : "text-left"
              } ${contextthem === "dark" ? "dark-theme" : "light-theme"}`}
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <MyNavbar />
              <div className="all p-5">
                <Routers />
              </div>
            </div>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
