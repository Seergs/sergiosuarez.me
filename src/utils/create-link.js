function createLink({ pathname, to }) {
  if (pathname.includes('/en/') || pathname.includes('/es/')) {
    return `${pathname}${to}`;
  }

  if (pathname.includes('/en') || pathname.includes('/es')) {
    return `${pathname}/${to}`;
  }

  return pathname;
}

function createChangeLangLink({ pathname, newPath }) {
  if (pathname.includes('/es') && newPath === 'es') return pathname;
  if (pathname.includes('/en') && newPath === 'en') return pathname;

  if (pathname.includes('/es')) return pathname.replace('/es', '/en');
  if (pathname.includes('/en')) return pathname.replace('/en', '/es');

  return pathname;
}

export { createLink, createChangeLangLink };
