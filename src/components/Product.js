import React from 'react'

const Product = (props) => {
    const {product, onAdd} = props
    return (
   
        <div class="col-4">
            <div class="card card-cascade card-ecommerce wider shadow mb-5 ">
               
                <div class="view view-cascade overlay text-center">
                    
                    <img class="card-img-top" src={product.image}  alt={product.name}/>  
                    <a>
                        <div class="mask rgba-white-slight"></div>
                    </a>
                    </div>
               
                <div class="card-body card-body-cascade text-center">
                   
                    <h4 class="card-title"><strong><a href="">{product.name}</a></strong></h4> 
                    <p class="price">${product.price}</p> 
                                      
                    <div class="card-footer">
                    <button className="btn btn-danger" onClick={()=>onAdd(product)} >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
           
        
        
    )
}

export default Product
