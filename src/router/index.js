import router from './router';

router.beforeEach((to, from, next) => {
    // NProgress.start();
    next();
});

router.afterEach(() => {
    // NProgress.done();
});