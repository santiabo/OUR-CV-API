
const server = require('express').Router();
const { Summary } = require('../db.js');


//-------------Create Eexperience
server.post("/:id", async (req, res, next) => {

  try {
    const { description } = req.body;
    const userId = req.params.id;
    const result = await Summary.create({
      description,
      userId
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

//----------------Update summary
server.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { description } = req.body;
    await Summary.update(
      {
       description
      },
      { where: { userId } }
    );
    const summary = await Summary.findAll({ where: { userId } });
    res.status(201).json(summary);
  }
  catch (e) {
    res.status(400).json({ MjsError: 'something went wrong :(' });
  };
});


//---------------Delete summary
server.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
 await Summary.destroy({where: {id}});
 res.status(201).json({"Status": "200"});
  }
  catch(e) {
    res.status(400).json({"message": `"${e}"`});
  }
})

module.exports = server;