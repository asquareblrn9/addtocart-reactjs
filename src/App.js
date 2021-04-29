import { useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import Data from './data';

function App() {
  const {products} = Data;
  //defining a state to handle cart items
  const [cartItems, setCartItems] = useState([]);

  const onAdd= (product) => {
    const exist = cartItems.find(x=> x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 }: x))

    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove= (product)=>{
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else
    {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1 }: x))
    }
  }
  return (
    <div className="container">
     <Header countCartItems={cartItems.length} />
     <div className="row mt-5">
       <div className="col-7">
          <Main products={products} onAdd={onAdd} />
       </div>
       <div className="col-5">
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
       </div>
     </div>
    
    
    </div>
  );
}

export default App;
