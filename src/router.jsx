import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './views/Login'
import Register from './views/Register'

import MainLayout from './layouts/MainLayout'
import Balotas from './components/Balotas'

const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Balotas/>
            }
        ]
    },
    {
        path: '/auth',
        element:<AuthLayout />,
        children: [
            {
                path:'/auth/login',
                element: <Login />
            },
            {
                path:'/auth/register',
                element: <Register />
            }
        ]

    }
])

export default router