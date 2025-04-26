import { useContext } from "react";
import DataContext from "../context/DataContex";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useContext(DataContext);

  return (
    <>
      <div className="container my-5">
        {cart.length == 0 ? (
          <div className="text-center">
            <h1>YOur cart is emptu</h1>
            <Link to={"/"} className="btn btn-warning mt-3">
              Continoue shoping
            </Link>
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center ">
              {cart.map((product) => (
                <div key={product.id} className="col-g-8 col-md-10 my-3">
                  <div className="cart-card">
                    <div className="row g-0 align-align-items-center">
                      <div className="col-md-4 d-flex justify-content-center ">
                        <img src={product.imgSrc} alt="" className="cart-img" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <div className="product-title">{product.title}</div>
                          <p className="product-description">
                            {product.description}
                          </p>
                          <p className="product-price">{product.price}</p>
                          <button
                            className="btn add-to-cart"
                            onClick={() =>
                              addToCart(
                                product.id,
                                product.title,
                                product.price,
                                product.imgSrc
                              )
                            }
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
