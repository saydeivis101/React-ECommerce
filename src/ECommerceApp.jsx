import { CartComponent } from "./components/cart/CartComponent";
import { FiltersComponent } from "./components/filters/FiltersComponent";
import { ProductsGrid } from "./components/products/ProductsGrid";
import "./index.css";
import "./app.css";
import { CartProvider } from "./context/CartProvider";

export const ECommerceApp = () => {
  return (
    <CartProvider>
      <div className="container">
        <header>
          <h1>E-Commerce-App</h1>

          <FiltersComponent />
          <CartComponent />
        </header>

        <main>
          <ProductsGrid />
        </main>
      </div>
    </CartProvider>
  );
};
