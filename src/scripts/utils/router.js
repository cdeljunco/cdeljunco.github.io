import { render } from 'lit-html';
import aboutPage from '../pages/About';
import academicsPage from '../pages/Academics';
import activitiesPage from '../pages/Activities';

// expects a route in the form of #{route}
// could be expanded/modified to support route params
// TODO: could maybe just use window.location.pathname
const getRoute = () => window.location.hash.slice(1).toLocaleLowerCase() || '/';

const paths = {
    ABOUT: 'about',
    ACADEMICS: 'academics',
    ACTIVITIES: 'activities'
};

const routes = {
    [paths.ABOUT]: aboutPage,
    [paths.ACADEMICS]: academicsPage,
    [paths.ACTIVITIES]: activitiesPage
};

// TODO: still need to figure out how to set active route styling when not navigating with links
const router = (rootElement) => {
    const currentRoute = getRoute();

    // we don't have a 404 page, we just always show 'about' by default
    render((routes[currentRoute] || routes[paths.ABOUT]), rootElement);
}

export default router;