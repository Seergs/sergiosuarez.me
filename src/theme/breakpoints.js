export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 48,
  xl: 60,
};

export const mediaQueries = (key) => (style) => `@media (max-width: ${breakpoints[key]}rem) {${style}}`;
