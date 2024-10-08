
import { fetchProducts, renderProducts } from "./js/product.js";

document.addEventListener("DOMContentLoaded", async () => {
    if (window.location.pathname.includes("cart.html")) {

    }
    else {//index.html'deyim
        try {
            const products = await fetchProducts();
            console.log(products);
            renderProducts(products, (event) => addToCart());

        } catch (error) {
            console.error("Ürünler getirilirken hata oluştu:", error);

        }
    }
});