import { Route, Switch } from "react-router";
import Login from './pages/Login';
import Register from './pages/Register';
import Logo from './components/Logo';

function App() {
  return (
   <main>
     <Logo />
     <Switch>
       <Route path='/' component={Login} exact/>
       <Route path='/register' component={Register} />
       <Route component={Error} />
     </Switch>
   </main>
  );
}

export default App;
