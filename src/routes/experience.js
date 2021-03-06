const server = require('express').Router();
const { Experience } = require('../db.js');

//-------------Create Eexperience
server.post("/:id", async (req, res) => {
  try {
    const { position, place, date, info } = req.body;
    const curriculumId = req.params.id;
    const result = await Experience.create({
      position,
      place,
      date,
      info,
      curriculumId
    });
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({"message": `"${e}"`});
  }
});

//----------------Update experience
server.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { position, title, place, info, date } = req.body;
    await Experience.update(
      {
        position,
        title,
        place,
        info, 
        date
      },
      { where: { id } }
    );
    const experience = await Experience.findByPk(id);
    res.status(201).json(experience);
  }
  catch (e) {
    res.status(400).json({"message": `"${e}"`});
  };
});

//---------------Delete experience
server.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
 const experience = await Experience.findByPk(id);
 await Experience.destroy({where: {id}});
 res.status(201).json(experience);
  }
  catch(e) {
    res.status(400).json({"message": `"${e}"`});
  }
})

module.exports = server;