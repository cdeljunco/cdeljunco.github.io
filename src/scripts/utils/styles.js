const activeClass = 'active';

/**
 * 
 * Adds/removes the 'active' class every time navigation occurs
 * Without this, link highlighting would only occur through clicks
 * 
 * @param {string} routeName - current route
 * @param {string} defaultRouteName - fallback in case no route is active
 */
export const toggleActiveLink = (routeName, defaultRouteName) => {
  const activeLink = document.querySelector(`.${activeClass}`);

  if (activeLink) {
      activeLink.classList.remove(activeClass);
  }

  const routeLink = document.getElementById(routeName) || document.getElementById(defaultRouteName);

  if (routeLink && !routeLink.classList.contains(activeClass)) {
      routeLink.classList.add(activeClass);
  }
}