
import './App.css';
import Index from './components/Index'
import About from './components/About'
import Counter from './components/Counter'
import Conditional from './components/Conditional';
import Seconds from './components/Seconds';
 
function App() {
  return (
    <div className="App">
      <Index  ></Index>
      <About></About>
      <Counter/>
      <Conditional/>
      <Seconds/>
    </div>
  );
}

export default App;
