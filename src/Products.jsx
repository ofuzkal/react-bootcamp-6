import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h1>Produc Component </h1>
      <div className="products-wrapper">
        <ProductItem
          image={
            "https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/b/e/beypazari-soda-200ml.jpg"
          }
          title="Soda"
          price={10}
        />
        <ProductItem
          image="https://st-vans.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/638574215162138731.jpg"
          title="Tisört"
          price={10}
        />
      </div>
    </div>
  );
}

export default Products;
