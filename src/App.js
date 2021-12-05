import './App.css';
import AllFoods from './pages/AllFoods';
import {Route,Switch,Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MyCart from './pages/MyCart';
import AdminAllFoods from './pages/AdminAllFoods';
import AddFood from './pages/AddFood';
import EditFood from './pages/EditFood';
import axios from 'axios';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import { useContext } from 'react'
import AuthContext from './store/Auth-context';
axios.defaults.withCredentials=true;

function App() {

  
const authCtx = useContext(AuthContext);
const loggedIn  =authCtx.loggedIn;

  return (
    <Layout>
    <Switch>
    <Route path="/" exact>
      <Redirect to="/allfoods"/>
    </Route>
      <Route path="/allfoods">
        <AllFoods/>
      </Route>
      {loggedIn === true && <>
        <Route path="/my-cart">
        <MyCart/>
      </Route>
      </>}
      <Route path="/admin-foods">
      <AdminAllFoods/>
      </Route>
      <Route path="/addFood">
      <AddFood/>
      </Route>
      <Route path="/editFood">
      <EditFood/>
      </Route>
      {loggedIn === false && <>
        <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
      <Login/>
      </Route>
      </>}
    </Switch>
    </Layout>
  );
}

export default App;
