import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Brand from "../../Pages/Brand/Brand";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/brand/:id',
                element: <Brand></Brand>,
                loader: ({ params }) => fetch(`http://localhost:5000/mobileBrands/${params.id}`)
            }
        ]
    }
])