import { Request, Response } from "express";
import { createProductService, getProductsService, updateProductService, deleteProductService } from "../services/productService";

export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { name, price} = req.body;
    const product = await createProductService( name, price);
    res.status(201).json(product);
    console.log(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {

    const products = await getProductsService();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};


export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    const updatedProduct = await updateProductService(req.params.id, name, price);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await deleteProductService(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
