import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import Data from './data';

function App() {
  const {products} = Data;
  return (
    <div className="container">
     <Header />
     <div className="row mt-5">
       <div className="col-8">
          <Main products={products} />
       </div>
       <div className="col-4">
        <Basket />
       </div>
     </div>
    
    
    </div>
  );
}

export default App;
