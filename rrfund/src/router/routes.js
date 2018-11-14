const Layout = r => require.ensure([], () => r(require('@/modules/user/views/layout/layout')), 'layout')
const Home = r => require.ensure([], () => r(require('@/modules/user/views/home/home')), 'home')
const Detail = r => require.ensure([], () => r(require('@/modules/user/views/detail/detail')), 'detail')
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home,
                meta: {
                    title: ''
                }
            },
            {
                path: '/detail',
                name: 'detail',
                component: Detail,
                meta: {
                    title: ''
                }
            }
        ]
    }
]
export default routes
