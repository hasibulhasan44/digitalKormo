import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import FAQS from "../Components/FAQs/FAQS";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import SingleCourse from '../Components/singleCourse/SingleCourse';
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
                path:'/courses',
                element:<SingleCourse></SingleCourse>
            },
            {
                path: '/courses/:id',
                loader: async({params}) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/faqs',
                element:<FAQS></FAQS>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default routes;