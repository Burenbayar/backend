import { Request, Response } from "express";
import { createProduct, getAllProducts, updateProduct, deleteProduct } from "../src/services/product.service";

export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, price } = req.body;
        const product = await createProduct(name, price);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error creating product" });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};

export const editProduct = async (req: Request, res: Response) => {
    try {
        const { name, price } = req.body;
        const updatedProduct = await updateProduct(Number(req.params.id), name, price);
        res.json(updatedProduct);
    } catch (error) {
        res.status(404).json({ message: "Product not found or update failed" });
    }
};

export const removeProduct = async (req: Request, res: Response) => {
    try {
        await deleteProduct(Number(req.params.id));
        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(404).json({ message: "Product not found or deletion failed" });
    }
};