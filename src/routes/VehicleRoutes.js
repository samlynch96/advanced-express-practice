import express from "express";
const router = express.Router();
import vehicles from "../vehicles";

router.get("/vehicles",(req,res) => {
  //how to respond
return res.json(vehicles);
})

router.get("/vehicles/:id",(req,res) => {
  const onevehicle = vehicles.find(u=>u._id == req.params.id);
  return res.json(onevehicle);
})

router.post("/vehicles",(req,res) => {
  //how to respond
  vehicles.push(req.body);
return res.json(req.body);
})

export default router;
