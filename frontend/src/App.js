import './App.css';
import PlacaresCasas from './DisputaCasas.js';
import HeaderComponent from './HeaderComponente.js';

function App() {
  return (
    <div className="App">
      <HeaderComponent style={{ fontFamily: 'Harry Potter, sans-serif' }} />
      <PlacaresCasas style={{ fontFamily: 'Harry Potter, sans-serif' }}  />
    </div>
  );
}

export default App;
