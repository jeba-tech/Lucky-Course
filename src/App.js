
import './App.css';
import Coursedata from './Components/Course/Coursedata';
import Header from './Components/Header/Header';
import Question from './Components/Questions/Question';
function App() {
  return (
    <div>
      <Header></Header>
      <Coursedata></Coursedata>
      <Question></Question>
    </div>
  );
}

export default App;
