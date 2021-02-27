const server = require('express').Router();
const { Education } = require('../db.js');


//-------------Create Education
server.post("/:id", async (req, res, next) => {

  try {
    const { title, place, date } = req.body;
    const userId = req.params.id;
    const result = await Education.create({
      title,
      place,
      date,
      userId
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

//----------------Update education
server.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, place, date } = req.body;
    await Education.update(
      {
        title,
        place,
        date,
      },
      { where: { id } }
    );
    const education = await Education.findByPk(id);
    res.status(201).json(education);
  }
  catch (e) {
    console.log(e);
    res.status(400).json({ MjsError: 'something went wrong :(' });
  };
});


//---------------Delete education
server.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
 await Education.destroy({where: {id}});
 res.status(201).json({"Status": "200"});
  }
  catch(e) {
    res.status(400).json({"message": `"${e}"`});
  }
})

module.exports = server;