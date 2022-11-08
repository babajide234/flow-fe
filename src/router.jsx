import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

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
        path:'/dashboard',
        element:<Dashboard/>
    }
])

export default routes;