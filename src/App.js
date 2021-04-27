import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
     <Header />
     <div className="row">
       <div className="col-8">
          <Main />
       </div>
       <div className="col-4">
        <Basket />
       </div>
     </div>
    
    
    </div>
  );
}

export default App;
