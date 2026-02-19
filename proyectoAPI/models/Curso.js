//Crear un modelo de datos, similar a las clases
const moongose = require("moongose");

const cursoSchema = new moongose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    creditos: { type: Number, required: true },
  },
  { timestamps: true },
);

module.exports = moongose.model("Curso", cursoSchema);
