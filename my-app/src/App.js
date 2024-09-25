// import logo from './logo.svg';

import './App.css';
// import './App.module.css';

// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Good Morning" name="Bob Smith" age="33" location="London" /> */}
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting = "Good Morning" name = "Bob Smith" /> */}
      {/* <StatefulGreetingWithCallback greeting = "Good Morning" name = "Bob Smith" /> */}
      <StatefulGreetingWithPrevState greeting = "Good Morning" name = "Bob Smith" />
    </div>
  );
}

export default App;
