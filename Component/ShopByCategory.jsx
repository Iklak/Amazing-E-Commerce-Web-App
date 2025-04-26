import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaThLarge,
  FaRubleSign,
  FaClock,
  FaRupeeSign,
} from "react-icons/fa";
import DataContext from "../context/DataContex";
import { items } from "../Context/Data";
import { name } from "tar/types";
import { useContext, useState } from "react";

const categories = [
  { name: "All Product", icons: <FaThLarge></FaThLarge> },
  { name: "Mobiles", icons: <FaMobileAlt /> },
  { name: "Laptops", icons: <FaLaptop /> },
  { name: "Tablets", icons: <FaTabletAlt></FaTabletAlt> },
  { name: "Watches", icons: <FaClock></FaClock> },
];

const priceRange = [30000, 40000, 50000, 60000, 70000, 80000];
function ShopByCategory() {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000);

  const filterByCategories = (cat) => {
    if (cat == "All Product") {
      setProducts(items);
      return;
    }
    setProducts(
      items.filter((pro) => pro.category.toLowerCase() === cat.toLowerCase())
    );
  };

  const filterByPrice = (price) => {
    setProducts(items.filter((pro) => pro.price <= price));
  };
  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className="text-center mb-3">Filter product</h3>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-4">
          {categories.map(({ name, icons }) => (
            <div
              key={name}
              className=" d-flex align-content-center gap-2 px-3 py-2 bg-secondary text-light fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => filterByCategories(name)}
            >
              {icons}
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {priceRange.map((price) => (
            <span
              key={price}
              className={`badge p-3 fw-bold ${
                selectedPrice === price
                  ? "bg-warning text-dark"
                  : "bg-light text-dark"
              }`}
              style={{
                cursor: "pointer",
                fontSize: "1rem",
                borderRadius: "10px",
              }}
              onClick={()=>filterByPrice(price)}
            >
              <FaRupeeSign></FaRupeeSign> {price}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopByCategory;
