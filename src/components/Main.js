import Product from './Product'

const Main = ({products}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Products</h3>
            </div>
        <div className="card-body">
            {products.map((products)=>(
                <Product key={products.id} product={product} />
            ))}
        
        <h1>Hello</h1>
        </div>
    </div>
    )
}

export default Main
