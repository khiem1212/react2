import logo from './logo.svg';
import './App.css';
import "./models/header";
import Header from './models/header';
import Body from './models/body';
import Footer from './models/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
