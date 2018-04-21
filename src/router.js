const routers = [
    {
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/grid',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/grid.vue'], resolve)
    },
    {
        path: '/layout',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/layout.vue'], resolve)
    },
    {
        path: '/button',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/button.vue'], resolve)
    },
    {
        path: '/table',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/table.vue'], resolve)
    },
    {
        path: '/slider',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/slider.vue'], resolve)
    },
    {
        path: '/datePicker',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/datePicker.vue'], resolve)
    }
];
export default routers;