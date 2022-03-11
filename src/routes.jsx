
import HomePage from './views/HomePage';
// import eventiApp from '../views/eventi-app';
// import orgApp from '../views/org-app';
// import orgEdit from '../views/org-edit';
// import eventiEdit from '../views/eventi-edit';
// import login from '../views/login';
// import eventiDetails from '../views/eventi-details';
// import orgDetails from '../views/org-details';
// import userDetails from '../views/user-details';
// import ErrorPage404 from "./cmps/errors/ErrorPage404";

export default [{
    path: '/',
    label: 'Home',
    element: <HomePage />
},
{
    path: '/eventi-app',
    label: 'Volunteerings',
    element: <eventiApp />
},
    // {
    //     path: '/org-app',
    //     name: 'orgApp',
    //     element: <orgApp />
    // },
    // {
    //     path: '/org-edit/:orgId?',
    //     name: 'orgEdit',
    //     element: <orgEdit />
    // },
    // {
    //     path: '/eventi-edit/:_id?',
    //     name: 'eventiEdit',
    //     element: <eventiEdit />
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     element: <login />
    // },
    // {
    //     path: '/eventi-details/:eventiId',
    //     name: 'eventiDetails',
    //     element: <eventiDetails />
    // },
    // {
    //     path: '/org-details/:orgId',
    //     name: 'orgDetails',
    //     element: <orgDetails />
    // },
    // {
    //     path: '/user-details/:userId',
    //     name: 'userDetails',
    //     element: <userDetails />
    // },
]