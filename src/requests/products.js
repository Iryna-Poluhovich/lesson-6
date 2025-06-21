import { dummiapy } from "../services/api";

// запит на всі продукти
export async function getAllProducts() {
    return await dummiapy.get('/products')
}