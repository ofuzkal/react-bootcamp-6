import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/b/e/beypazari-soda-200ml.jpg"
          alt="Soda"
        />
      </div>
      <div className="product-info">
        <b className="product-title">Soda</b>
        <span className="product-price">4₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
