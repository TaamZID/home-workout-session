import "./App.css";
import Header from "./components/Header/Header";
import Practices from "./components/Practices/Practices";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Practices></Practices>
      <Question></Question>
    </div>
  );
}

export default App;
