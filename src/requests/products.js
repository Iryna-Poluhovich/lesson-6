import { dummiapy } from "../services/api";

// запит на всі продукти
export async function getAllProducts() {
    return await dummiapy.get('/products')
};

export async function getSingleProduct(id) {
    return await dummiapy.get(`/product/${id}`)
};

export async function addProduct(newProduct) {
    return await dummiapy.post('/products/add', newProduct)
}