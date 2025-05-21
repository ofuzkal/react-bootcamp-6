import ProductItem from "./ProductItem";
import {productsData} from "./data/productsData";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h1>Products Component</h1>
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductItem
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
