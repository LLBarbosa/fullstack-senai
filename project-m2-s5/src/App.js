import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';
import logoGuitar from './images/logoGuitar.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <img src={logoGuitar} className="logo" alt="logo-guitar" />
        <div> <Button value="Songs"/> 
        </div>
        <div>
        <Button value="Contact"/>

        </div>
       
       <Footer/>
     
    </div>
  );
}

export default App;