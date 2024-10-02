// import logo from './logo.svg';

// import './App.css';
import './App.module.css';

// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import EventBinding from './components/EventBinding';

// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';

// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';

import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Good Morning" name="Bob Smith" age="33" location="London" /> */}
      {/* <StatefulGreeting greeting = "Good Morning" name = "Bob Smith" /> */}
      {/* <StatefulGreetingWithCallback greeting = "Good Morning" name = "Bob Smith" /> */}
      {/* <StatefulGreetingWithPrevState greeting = "Good Morning" name = "Bob Smith" /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}

      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
    </div>
  );
}

export default App;
