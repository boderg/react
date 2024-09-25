// import logo from './logo.svg';
// import './App.css';
import './App.module.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Good Morning" name="Bob Smith" age="33" location="London" /> */}
      <Sidebar />
    </div>
  );
}

export default App;
