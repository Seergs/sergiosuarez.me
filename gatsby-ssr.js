/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import theme from './src/theme/theme';

function setColorsByTheme() {
  const colors = '🎨';
  const colorModeKey = '🔑';
  const colorModeCssProp = '🎇';

  let colorMode = 'light';
  const persistedColorPreference = window.localStorage.getItem(colorModeKey);
  const hastPersistedPreference = typeof persistedColorPreference === 'string';
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  if (hastPersistedPreference) colorMode = persistedColorPreference;
  else colorMode = mql.matches ? 'dark' : 'light';

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  // eslint-disable-next-line no-restricted-syntax
  for (const [colorName, colorValue] of Object.entries(colors[colorMode])) {
    const cssVarName = `--color-${colorName}`;

    root.style.setProperty(cssVarName, colorValue);
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🎨"', JSON.stringify(theme))
    .replace('🔑', 'color-mode')
    .replace('🎇', '--initial-color-mode');

  const calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
