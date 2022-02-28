import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/Blog";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";



const routes = [
    {path: '/blogs/:id' , component : Blog},
    {path: '/blogs' , component : BlogPage},
    {path: '/profile' , component : Profile},
    {path: '/about-us' , component : AboutUs},
    {path:'*' , component:NotFound},
    {path: '/' , component : HomePage , exact :true},
]

export default routes;