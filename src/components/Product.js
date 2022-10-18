// import react
import React from "react";

// product
const Product = (props) => {
    return (
        // section product
        <section id="product">
            <div className="container">
                <div className="row justify-content-center gy-4">

                    {/* products map  */}
                    {props.products.map( (product, index) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                {/* product card */}
                                <div className="card shadow">
                                    <figure className="figure shadow">
                                        <img src={product.image} className="figure-img img-fluid rounded" alt="..."/>
                                    </figure>

                                    {/* card body */}
                                    <div className="card-body">
                                        <h5>{product.name}</h5>
                                        <p>{product.price} &euro;</p>
                                    </div>

                                    {/* card btn */}
                                    <div className="card-btn px-3 pb-3">
                                        <button className="btn btn-primary w-100">Aggiungi al carrello</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

// export product
export default Product;