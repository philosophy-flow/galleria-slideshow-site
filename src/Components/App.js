import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import data from '../data';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery data={data} />
    </div>
  );
}

export default App;
