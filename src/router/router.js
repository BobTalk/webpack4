let routes = [
    {
        path: '/',
        name: '',
        component: () =>
            import ('@/views/home.vue'),
        meta: { title: '首页' }
    }
]
module.exports = {
    routes
}