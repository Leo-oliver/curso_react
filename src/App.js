import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import HelloWorld from './components/HelloWorld';

function App() {

  let nome = "Leandro de Oliveira"
  const geral = ['Leandro', '36 anos', 'Desenvolvedor']
  const imagem = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <HelloWorld/>

      <h1>Olá React</h1>  
      <SayMyName nome='Leandro' />
      <SayMyName nome='Paulo' />    
      <SayMyName nome={nome}/>
      <Pessoa
      nome={geral[0]}
      idade={geral[1]}
      profissao={geral[2]}
      foto={imagem}
      />
    </div>
  );
}

export default App;
