import { useParams } from "react-router-dom";
import Product from "../Component/Product";
import { items } from "../Context/Data";
import { useContext } from "react";
import DataContext from "../Context/DataContex";
import "./ProductDetails.css";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(DataContext);
  const product = items.find((pro) => pro.id == id);
  const relatedProduct = items.filter(
    (pro) => pro.category.toLowerCase() == product.category.toLowerCase()
  );
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="product-detail-card">
            <div className="image-section">
              <img src={product.imgSrc} alt="" className="product-image" />
            </div>
            <div className="info-section">
              <div className="product-title">{product.title}</div>
              <p className="product-description">{product.description}</p>
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
                🛒Add To cart
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center my-5">Related Product</h2>
        <Product item={relatedProduct}></Product>
      </div>
    </>
  );
}
export default ProductDetail;
