import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext } from "@/contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  let activatedMessage;
  if (lang.name === "en") {
    activatedMessage =
      theme.name === "light"
        ? lang.detail.lightActivated
        : lang.detail.darkActivated;
  } else {
    activatedMessage =
      theme.name === "light"
        ? lang.detail.lightActivated
        : lang.detail.darkActivated;
  }

  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {activatedMessage}
    </p>
  );
};
