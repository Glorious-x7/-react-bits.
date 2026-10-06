
import ElectricBorder from "./components/ElectricBorder";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ElectricBorder
        color="#00d9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 12 }}
      >
        <button className="botao">
          Botão do Tonim
        </button>
      </ElectricBorder>
    </div>
  );
}

export default App;
