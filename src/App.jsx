import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemLists";

function App() {

  return (
    <> 
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!"/>
    </>
  )
}

export default App;
