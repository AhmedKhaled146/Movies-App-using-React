import React, { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentLang } from '../store/slices/language';
import { LanguageContext } from "../context/language";
import { ThemeContext } from "../context/theme";

function Contact() {
  const language = useSelector((state) => state.language.current_lang);
  const {contextLang, setContextLang} = useContext(LanguageContext)
  const {contextthem, setContexttheme} = useContext(ThemeContext)

  const dispatch = useDispatch();
  return (
    <div className="m-5">
      <h2 className="m-5">Redux Language </h2>
      <h2 className="m-5">Language : {language}</h2>

      <p>Change Language</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(changeCurrentLang("ar"))}
      >
        Change to ar
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(changeCurrentLang("en"))}
      >
        Change to en
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(changeCurrentLang("fr"))}
      >
        Change to fr
      </button>
      {/* =========================== */}
      <hr />
      {/* =========================== */}
      <h2 className="m-5">context Language </h2>
      <h2 className="m-5">Language : {contextLang}</h2>
      <p>Change Language</p>
      <button
        className="btn btn-primary"
        onClick={() => setContextLang('ar')}
      >
        Change to ar
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setContextLang('en')}
      >
        Change to en
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setContextLang('fr')}
      >
        Change to fr
      </button>
      {/* =========================== */}
      <hr />
      {/* =========================== */}
      <h2 className="m-5">context Theme </h2>
      <h2 className="m-5">Language : {contextthem}</h2>
      <p>Change Language</p>
      <button
        className="btn btn-primary"
        onClick={() => setContexttheme('dark')}
      >
        Change to dark
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setContexttheme('light')}
      >
        Change to light
      </button>
    </div>
  );
}

export default Contact;
