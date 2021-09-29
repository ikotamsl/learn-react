import './App.css';
import Ccomponent from "./components/Ccomponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Ccomponent names={["Class", "Collaborator", "Idiot"]} fullName={"Ivan Sys"}/>*/}
          <FormComponent />
      </header>
    </div>
  );
}

export default App;
