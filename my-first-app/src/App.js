import "./index.css"

//componeente principal o que da inicio a React
function App() {
  
  const dolar = 8.64;

  return (
    <div className="App">
      <h1 className="titulo" >Hola Mundo {dolar < 7 ? 'menor' : 'mayor'}!</h1>
    </div>
  );
}

export default App;
