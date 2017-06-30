import express from "express";
const router = express.Router();
import products from "../products";

router.get("/products",(req,res) => {
  //how to respond
return res.json(products);
})

router.get("/products/:id",(req,res) => {
  const oneproduct = products.find(u=>u._id == req.params.id);
  return res.json(oneproduct);
})

router.post("/products",(req,res) => {
  //how to respond
  products.push(req.body);
return res.json(req.body);
})

export default router;
