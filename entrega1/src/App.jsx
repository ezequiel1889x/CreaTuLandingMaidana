import './App.css'
import PrimerNav from './components/PrimerNav.jsx'
import Button from './components/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const titulo = 'Mi pagina'
  const html1 = 'Primer pagina'
  const html2 = 'Segunda pagina'
  const textoButton = 'Bienvenido'


  return (
    <>
      <PrimerNav titulo={titulo} html1={html1} html2={html2} />
        <>
          <Button textoButton={textoButton}/>
        </>
    </>

  );
}

export default App
