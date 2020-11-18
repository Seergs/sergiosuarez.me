import theme from "./src/theme/theme";
const MagicScriptTag = () => {
  let codeToRunOnClient = `
        (function(){
            function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem("color-mode");
                const hastPersistedPreference = typeof persistedColorPreference === "string";

                if (hastPersistedPreference) return persistedColorPreference;

                const mql = window.matchMedia("(prefers-color-scheme: dark)");
                const hastMediaQueryPreference = typeof mql.matches === "boolean";

                if (hastMediaQueryPreference) return mql.matches ? "dark" : "light";

                return "light";
            }

            const colorMode = getInitialColorMode();

            const root = document.documentElement;

    
            root.style.setProperty(
                '--color-background',
                colorMode === 'light
                ? '${theme.light.bg}'
                : '${theme.dark.bg}'
            );
            root.style.setProperty(
                '--color-text',
                colorMode === 'light
                    ? '${theme.light.text}'
                    : '${theme.dark.text}'
            );
            root.style.setProperty(
                '--color-headings',
                colorMode === 'light
                    ? '${theme.light.headings}'
                    : '${theme.dark.headings}'
            );

            root.style.setProperty('--initial-color-mode', colorMode);
        })()
    `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
