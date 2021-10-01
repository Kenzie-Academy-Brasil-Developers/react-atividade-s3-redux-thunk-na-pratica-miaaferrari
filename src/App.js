import './App.css';
import { Display } from './components/display';
import { User } from './components/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <User />
      </header>
    </div>
  );
}

export default App;
