import Product from './Product'

const Main = ({products, onAdd}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Products</h3>
            </div>
        <div className="card-body">
            <div className="row">
           
            {products.map((products)=>(
               
                <Product key={products.id} product={products} onAdd={onAdd} />
              
            ))}
        </div>
        </div>
    </div>
    )
}

export default Main
