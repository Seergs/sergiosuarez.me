import theme from "./src/theme/theme";
import React from "react";

function setColorsByTheme() {
  const colors = "🎨";
  const colorModeKey = "🔑";
  const colorModeCssProp = "🎇";

  let colorMode = "light";
  const persistedColorPreference = window.localStorage.getItem(colorModeKey);
  const hastPersistedPreference = typeof persistedColorPreference === "string";
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  if (hastPersistedPreference) colorMode = persistedColorPreference;
  else colorMode = mql.matches ? "dark" : "light";

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  for (const [colorName, colorValue] of Object.entries(colors[colorMode])) {
    const cssVarName = `--color-${colorName}`;

    root.style.setProperty(cssVarName, colorValue);
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace(`"🎨"`, JSON.stringify(theme))
    .replace("🔑", "color-mode")
    .replace("🎇", "--initial-color-mode");

  let calledFunction = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
