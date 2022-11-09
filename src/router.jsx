import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Landing/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    }
])

export default routes;