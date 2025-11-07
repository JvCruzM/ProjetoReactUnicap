import { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if(input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Nova tarefa" />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;