const express = require("express");
const router = express.Router();


const Curso = require('../models/Curso');



//Get
router.get("/", async (req, res) => {  
  const cursos = await Curso.find();
  res.json(cursos);
});

//Post crear datos
router.post("/", async (req, res) => {
  const nuevoCurso = new Curso(req.body);
  const cursoGuardado = await nuevoCurso.save();
  res.json(cursoGuardado);
});

module.exports = router;
