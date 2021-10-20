import './App.css';
import AllFoods from './pages/AllFoods';
import {Route,Switch,Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MyCart from './pages/MyCart';


function App() {
  return (
    <Layout>
    <Switch>
    <Route path="/" exact>
      <Redirect to="/allfoods"/>
    </Route>
      <Route path="/allfoods">
        <AllFoods/>
      </Route>
      <Route path="/my-cart">
        <MyCart/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
