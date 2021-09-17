import React from "react";
import { Link , Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='app'>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path={'/'}>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Pizza'>Pizza Maker</Link>
        </nav>
        </Route>
        <Route path={'Pizza'}>
          <Pizza/>
          </Route>
      </Switch>

      <p>You can remove this code and create your own header</p>
    </div>
    </>
  );
};
export default App;
