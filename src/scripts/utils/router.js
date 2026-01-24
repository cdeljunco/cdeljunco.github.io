import { render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/lit-html.min.js';
import aboutPage from '../pages/About.js';
import linksPage from '../pages/Links.js';
import { toggleActiveLink } from './styles.js';

const paths = {
    ABOUT: 'about',
    LINKS: 'links'
};

const routes = {
    [paths.ABOUT]: aboutPage,
    [paths.LINKS]: linksPage};

/**
 * Expects routes to follow the format #{route}
 * 
 * @return {string} The current route
 */
const getRoute = () => window.location.hash.slice(1).toLocaleLowerCase() || '/';

/**
 * Renders the current page onto the specified root element
 * we don't have a 404 page, we just always show 'about' by default
 * 
 * @param {Element} rootElement 
 */
const router = (rootElement) => {
    const currentRoute = getRoute();
    
    toggleActiveLink(currentRoute, paths.ABOUT);
    render((routes[currentRoute] || routes[paths.ABOUT]), rootElement);
};

export default router;
