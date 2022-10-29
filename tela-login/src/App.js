import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-form">
          <h1>Genesis Website</h1>
          <h3>Faça login e comece a usar</h3>
          <form action="">
              
              <input type="email" name="email" id="App-email" placeholder="Insira seu Email" />
            
              <input type="password" name="password" id="App-password"  placeholder="Insira sua senha!" />
              
            <input type="submit" value="Enviar" id="button"/>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
