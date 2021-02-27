const server = require('express').Router();
const { Skill } = require('../db.js');


//-------------Create Eexperience
server.post("/:id", async (req, res, next) => {

  try {
    const { area, tools } = req.body;
    const userId = req.params.id;
    const result = await Skill.create({
      area,
      tools,
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
    const { area, tools } = req.body;
    await Skill.update(
      {
        area,
        tools,
      },
      { where: { id } }
    );
    const skill = await Skill.findByPk(id);
    res.status(201).json(skill);
  }
  catch (e) {
    res.status(400).json(e);
  };
});


//---------------Delete skill
server.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
 await Skill.destroy({where: {id}});
 res.status(201).json({"Status": "200"});
  }
  catch(e) {
    res.status(400).json({"message": `"${e}"`});
  }
})

module.exports = server;