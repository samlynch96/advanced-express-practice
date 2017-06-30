import express from "express";
const router = express.Router();
import comments from "../comments";

router.get("/comments",(req,res) => {
  //how to respond
return res.json(comments);
})

router.get("/comments/:id",(req,res) => {
  const onecomment = comments.find(u=>u._id == req.params.id);
  return res.json(onecomment);
})

router.post("/comments",(req,res) => {
  //how to respond
  comments.push(req.body);
return res.json(req.body);
})

export default router;
