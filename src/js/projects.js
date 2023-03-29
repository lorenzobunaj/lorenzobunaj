// github redirect animation
const GithubRedirect = (CONF, prevPos) => {
    window.setTimeout(() => {
        let newPos = CONF.redirect.getBoundingClientRect();
        
        if (newPos.y < prevPos.y) {
            window.location.href = "https://github.com/lorenzobunaj";
        }
        window.setTimeout(() => {
            CONF.github.scrollTop =  `${prevPos.y - newPos.y}`;
        }, 200);
    }, 100);
}

export default GithubRedirect;
