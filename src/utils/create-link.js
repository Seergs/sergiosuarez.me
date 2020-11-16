function createLink({ pathname, to }) {
  if (pathname.includes("/en")) {
    if (pathname.includes("/en/")) {
      return `${pathname}${to}`;
    }
    return `${pathname}/${to}`;
  }

  if (pathname.includes("/es")) {
    if (pathname.includes("/es/")) {
      return `${pathname}${to}`;
    }
    return `${pathname}/${to}`;
  }
}

function createChangeLangLink({ pathname, newPath }) {
  if (pathname.includes("/es") && newPath === "es") return pathname;
  if (pathname.includes("/en") && newPath === "en") return pathname;

  if (pathname.includes("/es")) return pathname.replace("/es", "/en");
  if (pathname.includes("/en")) return pathname.replace("/en", "/es");
}

export { createLink, createChangeLangLink };
