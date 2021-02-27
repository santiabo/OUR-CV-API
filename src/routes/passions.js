const server = require('express').Router();
const { Passion } = require('../db.js');


//-------------Create Eexperience
server.post("/:id", async (req, res, next) => {

  try {
    const { area, description } = req.body;
    const userId = req.params.id;
    const result = await Passion.create({
      area,
      description,
      userId
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

//----------------Update experience
server.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { area, description } = req.body;
    await Passion.update(
      {
        area,
        description,
      },
      { where: { id } }
    );
    const passion = await Passion.findByPk(id);
    res.status(201).json(passion);
  }
  catch (e) {
    res.status(400).json(e);
  };
});


//---------------Delete passion
server.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
 await Passion.destroy({where: {id}});
 res.status(201).json({"Status": "200"});
  }
  catch(e) {
    res.status(400).json({"message": `"${e}"`});
  }
})

module.exports = server;