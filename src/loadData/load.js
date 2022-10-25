import { getStoredCart } from "../utilities/fakedb";

export const load = async() => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    // console.log(products);
    const savedCart = getStoredCart();
    // console.log(savedCart);
    const initialCart = [];

    for (const id in savedCart) {
        // console.log(id);
        const addededProducts = products.find(product => product.id === id);
        // console.log(id, addededProducts);
        if (addededProducts) {
            const quantity = savedCart[id];
            // console.log(id, quantity);
            addededProducts.quantity = quantity;
            initialCart.push(addededProducts);

            // normal array te push kora jay, state er array te push kora jay na. state er array te ager array er element gula copy kpre niye boshaote hbe. javasript er ekta function theke 2 ta alada valuye return korte hoile array or object diye pathaite hoy. nut object or array jetai hok 1 tai return kora jabe, hoyto 2 ta or beshi value thakte pare,
        }
    }
    
    return {products: products, initialCart: initialCart};
}