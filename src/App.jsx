// =========================================================
// 📦 IMPORTAÇÕES E ESTILOS
// =========================================================
import { useState, useEffect } from "react";
import "./App.css"; // Importa o arquivo de estilos principal

// =========================================================
// 🧩 COMPONENTE PRINCIPAL: App
// =========================================================
function App() {
  // ---------------------------------------------------------
  // 🧠 ESTADOS
  // ---------------------------------------------------------
  const [tarefas, setTarefas] = useState([]); // Lista de tarefas
  const [input, setInput] = useState(""); // Texto digitado no campo
  const [darkMode, setDarkMode] = useState(false); // Controle do tema escuro/claro

  // ---------------------------------------------------------
  // ➕ FUNÇÃO: Adicionar nova tarefa
  // ---------------------------------------------------------
  function adicionarTarefa() {
    // Evita adicionar tarefas vazias
    if (input.trim()) {
      // Cria uma nova lista com a tarefa adicionada
      setTarefas([...tarefas, input]);
      // Limpa o campo de texto
      setInput("");
    }
  }

  // ---------------------------------------------------------
  // ❌ FUNÇÃO: Remover tarefa pelo índice
  // ---------------------------------------------------------
  function removerTarefa(index) {
    // Filtra a lista removendo o item clicado
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  // ---------------------------------------------------------
  // 🌓 FUNÇÃO: Alternar entre modo claro e escuro
  // ---------------------------------------------------------
  function alternarTema() {
    setDarkMode(!darkMode);
  }

  // ---------------------------------------------------------
  // 🪄 EFEITO: Aplica classe "dark" no body conforme o tema
  // ---------------------------------------------------------
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  // =========================================================
  // 🧱 ESTRUTURA VISUAL (JSX)
  // =========================================================
  return (
    <div className="app">
      {/* -----------------------------------------------------
         🏷️ Cabeçalho com título e botão de tema
      ----------------------------------------------------- */}
      <div className="header">
        <h1 className="titulo">Minha Lista de Tarefas</h1>

        {/* Botão alterna o tema entre claro e escuro */}
        <button className="tema-btn" onClick={alternarTema}>
          {darkMode ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </div>

      {/* -----------------------------------------------------
         ✏️ Área de input e botão de adicionar
      ----------------------------------------------------- */}
      <div className="input-area">
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nova tarefa"
        />

        <button className="botao" onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      {/* -----------------------------------------------------
         🗒️ Lista de tarefas renderizada dinamicamente
      ----------------------------------------------------- */}
      <ul className="lista">
        {tarefas.map((tarefa, index) => (
          <li key={index} className="item">
            {/* Texto da tarefa */}
            <span className="texto-tarefa">{tarefa}</span>

            {/* Botão para remover tarefa */}
            <button
              className="remover-btn"
              onClick={() => removerTarefa(index)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =========================================================
// 🚀 EXPORTAÇÃO
// =========================================================
export default App;
