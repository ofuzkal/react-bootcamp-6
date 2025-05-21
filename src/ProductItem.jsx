import "./ProductItem.css";

function ProductItem() {
  const image ="https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/b/e/beypazari-soda-200ml.jpg"
  const title="Soda";
  const price=10
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="Soda" />
          
      </div>
      <div className="product-info">
        <b className="product-title">{title}</b>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
