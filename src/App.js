import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import routes from './routes';

function App() {
  return(
    <BrowserRouter>
      <Layout >
        <Switch >
        {routes.map((route) =>(
          <Route {...route} />
        ) )}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}


export default App;
