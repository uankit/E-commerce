import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import SingleProductPage from "./pages/SingleProductPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  let user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/products/:category">
          <ProductListPage />
        </Route>

        <Route exact path="/product/:id">
          <SingleProductPage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/auth/register">
          {user ? <Redirect to="/" /> : <RegisterPage />}
        </Route>

        <Route exact path="/auth/login">
          {user ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </Switch>
    </Router>
  );
}
