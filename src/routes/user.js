const server = require('express').Router();
const { User, Curriculum } = require('../db.js');

//-------------Create user
server.post("/", async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.log(error)
  }
});

//------------Get user
server.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByPk(id,
      {
        include: [{
          model: Curriculum,
          include: [{
            all: true
          }]
        }]
      })
      ;
    if (result) return res.json(result);
    return res.status(404).json({ Error: 'User not found' });
  } catch (error) {
    res.status(400).json({"message": `"${e}"`});
  }
});

//--------------------Update User
server.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email, mobile, city, name, title } = req.body;
    await User.update(
      {
        email,
        title,
        mobile,
        city,
        name
      },
      { where: { id } }
    );
    const user = await User.findByPk(id);
    res.status(201).json(user);
  }
  catch (e) {
    res.status(400).json({"message": `"${e}"`});
  };
});

//-----------------Update avatar
server.put('/avatar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { avatar } = req.body;
    await User.update(
      {
        avatar
      },
      { where: { id } }
    );
    const user = await User.findByPk(id);
    res.status(200).json(user);
  }
  catch (e) {
    res.status(400).json({"message": `"${e}"`});
  };
});

module.exports = server;
