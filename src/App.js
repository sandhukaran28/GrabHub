import './App.css';
import AllFoods from './pages/AllFoods';
import {Route,Switch,Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MyCart from './pages/MyCart';
import AdminAllFoods from './pages/AdminAllFoods';
import AddFood from './pages/AddFood';


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
      <Route path="/admin-foods">
      <AdminAllFoods/>
      </Route>
      <Route path="/addFood">
      <AddFood/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
