// import react
import React from "react";

// product
const Product = () => {
    return (
        // section product
        <section id="product">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-md-6 col-lg-4">
                        {/* product card */}
                        <div className="card shadow">
                            <figure className="figure shadow">
                                <img src="https://it.crucial.com/content/dam/crucial/articles/for-pc-builders/new025-how-to-upgrade-your-pc/modern-gaming-pc.jpg.transform/medium-jpg/img.jpg" className="figure-img img-fluid rounded" alt="..."/>
                            </figure>

                            {/* card body */}
                            <div className="card-body">
                                <h5>Pc Dell OptiPlex 3000 8GB DDR4-SDRAM 512GB SSD Nero</h5>
                                <p>799.99 &euro;</p>
                            </div>

                            {/* card btn */}
                            <div className="card-btn px-3 pb-3">
                                <button className="btn btn-primary w-100">Aggiungi al carrello</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

// export product
export default Product;