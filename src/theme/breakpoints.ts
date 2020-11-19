export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 48,
  xl: 60,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}rem) {${style}})`;
};
