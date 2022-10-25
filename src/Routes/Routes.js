import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])

export default routes;