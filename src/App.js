import './App.css';
import Button from './Button.js';
import TextMessage from './TextMessage.js'

function App() {
  return (
    <div className="App">
      <header>
        <div>
            <h3>LOGOA</h3>
        </div>
        <div className="menu_container">
          <TextMessage />
          <Button text="Login" className= "button_primary"/>
          <Button text="SignUp" className = "button_secondary"/>
        </div>
      </header>
    </div>
  );
}

export default App;
