import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {lang.name === "en" ? lang.buttons.setLightTheme : "ธีมไลท์"}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {lang.name === "en" ? lang.buttons.setDarkTheme : "ธีมดาร์ค"}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {lang.name === "en" ? lang.buttons.toggleTheme : "สลับธีม"}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {lang.name === "en" ? lang.buttons.toggleLang : "สลับภาษา"}
      </button>
    </div>
  );
}
