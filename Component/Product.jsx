import { Link, useLocation } from "react-router-dom";
import ShopByCategory from "./ShopByCategory";
import { ToastContainer } from "react-toastify";
import DataContext from "../context/DataContex";
import { useContext } from "react";

function Product({ item }) {
  const { pathname } = useLocation();
  const location = useLocation();
  const { addToCart } = useContext(DataContext);
  return (
    <>
      <ToastContainer />
      {pathname == "/" && <ShopByCategory></ShopByCategory>}
      <div className="container my-5">
        <div className="row d-flex  justify-content-center">
          {item.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 d-flex justify-content-center"
            >
              <div
                className="card product-card text-center"
                style={{ width: "18rem" }}
              >
                <Link to={`/product/${product.id}`} className="image-container">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="product-price">{product.price}</p>
                  <div className="button-container">
                    <button
                      className="btn add-to-cart"
                      onClick={() => {
                        addToCart(
                          product.id,
                          product.title,
                          product.price,
                          product.imgSrc
                        );
                      }}
                    >
                      {" "}
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
