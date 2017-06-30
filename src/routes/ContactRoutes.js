import express from "express";
const router = express.Router();
import contacts from "../contacts";

router.get("/contacts",(req,res) => {
  //how to respond
return res.json(contacts);
})

router.get("/contacts/:id",(req,res) => {
  const onecontact = contacts.find(u=>u._id == req.params.id);
  return res.json(onecontact);
})

router.post("/contacts",(req,res) => {
  //how to respond
  contacts.push(req.body);
return res.json(req.body);
})

export default router;
