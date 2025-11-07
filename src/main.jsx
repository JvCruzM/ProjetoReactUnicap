// =========================================================
// ⚛️ IMPORTAÇÕES PRINCIPAIS DO REACT E DO PROJETO
// =========================================================
import { StrictMode } from "react"; // Modo estrito: ajuda a detectar erros e boas práticas
import { createRoot } from "react-dom/client"; // API moderna para renderização do React 18+

// =========================================================
// 🎨 ESTILOS GLOBAIS E COMPONENTE PRINCIPAL
// =========================================================
import "./index.css"; // Estilos globais (cores, fontes e reset básico)
import App from "./App.jsx"; // Componente principal da aplicação

// =========================================================
// 🚀 PONTO DE ENTRADA DA APLICAÇÃO
// =========================================================
// Aqui o React é montado dentro da div com id="root" (em index.html)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* O StrictMode não afeta o comportamento do app em produção.
        Ele apenas alerta sobre práticas inseguras durante o desenvolvimento. */}
    <App />
  </StrictMode>
);
