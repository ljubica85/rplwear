import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
