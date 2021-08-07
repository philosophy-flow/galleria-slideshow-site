import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Painting from './Painting/Painting';
import data from '../data';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Gallery data={data} />
        </Route>
        
        {
          data.map(painting => (
            <Route path={`/${painting.name}`} key={painting.name}>
              <Painting painting={painting} />
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
