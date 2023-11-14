import { filterProducts } from "../../mocks/filterProducts";
import { ProductItem } from "./ProductItem";

export const ProductsGrid = () => {
  const { products } = filterProducts();

  return (
    <>
      {products ? (
        <ul className="products-grid">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};
