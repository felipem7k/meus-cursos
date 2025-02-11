import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
