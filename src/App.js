import './App.css';
import Ccomponent from "./components/Ccomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent names={["Class", "Collaborator", "Idiot"]} fullName={"Ivan Sys"}/>
      </header>
    </div>
  );
}

export default App;
