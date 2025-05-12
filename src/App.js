import './App.css';
import Counter from './class_counter';
import CounterFunc from './function_counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          counter task

        </p>

      </header>
      <h1>
        Class counter
      </h1>
      <Counter />
      <h1>
        function counter
      </h1>
      <CounterFunc />
    </div>
  );
}

export default App;
