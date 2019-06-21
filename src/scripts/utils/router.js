import AboutPage from '../pages/About';
import AcademicsPage from '../pages/Academics';
import ActivitiesPage from '../pages/Activities';

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
    [paths.ABOUT]: AboutPage,
    [paths.ACADEMICS]: AcademicsPage,
    [paths.ACTIVITIES]: ActivitiesPage
};

// TODO: still need to figure out how to set active route styling when not navigating with links
const router = (rootElement) => {
    const currentRoute = getRoute();

    // we don't have a 404 page, we just always show 'about' by default
    rootElement.innerHTML = routes[currentRoute] || routes[paths.ABOUT];
    
}

export default router;