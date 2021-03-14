const server = require('express').Router();
const { Curriculum } = require('../db.js');

//-------------Create Curriculum
server.post("/:id", async (req, res, next) => {
  try {
    const { language } = req.body;
    const userId = req.params.id;
    const result = await Curriculum.create({
      language,
      userId
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

//----------------Update Curriculum
server.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { language } = req.body;
    await Education.update(
      {
        language
      },
      { where: { id } }
    );
    const curriculum = await Curriculum.findByPk(id);
    res.status(201).json(curriculum);
  }
  catch (e) {
    console.log(e);
    res.status(400).json({ "message": `"${e}"`});
  };
});

//---------------Delete education
server.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Curriculum.destroy({ where: { id } });
    res.status(201).json({ "Status": "200" });
  }
  catch (e) {
    res.status(400).json({ "message": `"${e}"` });
  }
})

module.exports = server;
