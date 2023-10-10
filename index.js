import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Home from "./src/components/homePage";
import About from "./src/components/About";
import Project from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Error from "./src/components/error";
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP LINK 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const Applayout = () => {

    return (

        <Fragment>
            <div>
                <Header />
                <Outlet />
            </div>
        </Fragment>
    )
};




const appRouter = createBrowserRouter(

    [
        {
            path: "/",
            element: <Applayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/projects",
                    element: <Project />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
            ],
            errorElement: <Error />
        }
    ]
)



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}></RouterProvider>)