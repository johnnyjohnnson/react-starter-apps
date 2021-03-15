import './style/App.css';
import Voting from './components/Voting';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Voting />
      <Footer />
    </div>
  );
}

export default App;
