import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import ClassComponent from './components/classComponent';
import WithoutJSX from './components/withoutJSX';
import Display from './components/DisplayUsers';

import Dynamic from './components/Dynamic';
import UserForm from './components/UserForm';
import Reservation from './components/MulipleInput'

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Sofs"><p>Hey Kasama, How Are You?</p></Welcome>
      <Welcome name="Kasama" />
      <ClassComponent msg="msg from kasama -> I am fine, how about you" />
      <ClassComponent msg="msg from kasama -> I am also good, please click below button">
        <button>Click Me</button>
      </ClassComponent>
      <WithoutJSX />

      <Dynamic></Dynamic> */}
      {/* <Display /> */}
      <UserForm />
      {/* <Reservation /> */}
    </div>
  );
}

export default App;
