import { render } from 'lit-html';
import aboutPage from '../pages/About';
import academicsPage from '../pages/Academics';
/*import activitiesPage from '../pages/Activities';*/
import { toggleActiveLink } from './styles';

const paths = {
    ABOUT: 'about',
    ACADEMICS: 'academics',
    /*ACTIVITIES: 'activities'*/
};

const routes = {
    [paths.ABOUT]: aboutPage,
    [paths.ACADEMICS]: academicsPage,
    /*[paths.ACTIVITIES]: activitiesPage*/
};

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
