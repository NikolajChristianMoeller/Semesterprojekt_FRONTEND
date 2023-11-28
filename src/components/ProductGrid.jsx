/* eslint-disable react/prop-types */
export default function ProductGrid({products, fillCart}){ 
    try {
        return (
        <div className="container">
            <div className="row">
                {products.map((product)=>(
                    <div className="col" key={product.ID}>
                        <div className="card">
                        <img src="/vite.svg" className="card-img-top"/>
                        <p className="card-header">{product.Name}</p>
                        <p className="ms-5 pt-3">{product.Price}kr</p>
                        <div className="colors card-footer">
                                {product.ProductColor.map((color)=>(
                                    <div className="color-dot" key={product.ID + color.ID} style={{backgroundColor:(color.Code)}}/>                            
                                ))}    
                            </div>
                        <button onClick={()=> fillCart(product)} className="btn btn-light">
                        Tilføj til kurv 🛒
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        )
    
    } catch (error) {
        return(
            <>
                <h3>Error getting products :( </h3>
                <p>{error.message}</p>
            </>

        )
    }
}

