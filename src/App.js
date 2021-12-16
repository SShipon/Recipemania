
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/global.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Communities from './Components/CommunityContainer/Communities/Communities';
import LoginRegister from './Components/users/LoginRegister';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/community">
            <Communities />
          </Route>
          <Route exact path="/login">
            <LoginRegister />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
