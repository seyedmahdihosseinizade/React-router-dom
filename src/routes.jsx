import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";



const routes = [
    {path: '/' , component : HomePage , exact :true},
    {path: '/about-us' , component : AboutUs},
    {path: '/profile' , component : Profile},
    {path:'' , component:NotFound}
]

export default routes;