import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import routes from './routes';

function App() {
  return(
    <BrowserRouter>
      <Layout >
        {routes.map((route) =>(
          <Route {...route} />
        ) )}
      </Layout>
    </BrowserRouter>
  )
}


export default App;
