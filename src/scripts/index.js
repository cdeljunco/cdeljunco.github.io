import router from './utils/router';

(function() {
    const main = document.getElementById('main');
    const handleChangeRoute = () => router(main);

    // render new route when navigation to a new /#/ occurs
    window.addEventListener('hashchange', handleChangeRoute);

    // render page content on load
    window.addEventListener('load', handleChangeRoute);

    console.log('hello github');
})();

