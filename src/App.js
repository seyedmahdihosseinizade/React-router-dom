import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';
import './App.css';
import Layout from './Layouts/Layout';

function App() {
  return(
    <BrowserRouter>
      {/* <Navigation/> */}
      {/* <Layout/> */}
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/about-us" component={AboutUs}/>
    </BrowserRouter>
  )
}


export default App;
