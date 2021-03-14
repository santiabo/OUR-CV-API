const server = require("express").Router();
const { User, Curriculum, Experience, Education, Passion, Skill, Summary } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

server.post("/api/v1/auth/google", async (req, res) => {
  const { token } = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  });

  const { name, email, picture } = ticket.payload;

  const isUser = await User.findOne({ where: { email } })

  if (!isUser) {
    let user = await User.create({
      name,
      email,
      avatar: picture,
    })

    const curriculum = await Curriculum.create({
      language: "english",
      userId: user.id
    });

    await Experience.create({
      position: "Your position",
      place: "Company Name",
      date: "When ",
      info: "Detailed information about your job",
      curriculumId: curriculum.id
    });

    await Experience.create({
      position: "Your position",
      place: "Company Name",
      date: "When ",
      info: "Detailed information about your job",
      curriculumId: curriculum.id
    });

    await Education.create({
      title: "Obtained title",
      place: "Institution name",
      date: "When",
      curriculumId: curriculum.id
    });

    await Education.create({
      title: "Obtained title",
      place: "Institution name",
      date: "When",
      curriculumId: curriculum.id
    });

    await Passion.create({
      area: "Area",
      description: "Things you like to do besides work",
      curriculumId: curriculum.id
    });

    await Passion.create({
      area: "Area",
      description: "Things you like to do besides work",
      curriculumId: curriculum.id
    });

    await Skill.create({
      area: "Area",
      tools: "List all the tools you use in you work",
      curriculumId: curriculum.id
    });
    await Skill.create({
      area: "Area",
      tools: "List all the tools you use in you work",
      curriculumId: curriculum.id
    });
    await Skill.create({
      area: "Area",
      tools: "List all the tools you use in you work",
      curriculumId: curriculum.id
    });
    await Skill.create({
      area: "Area",
      tools: "List all the tools you use in you work",
      curriculumId: curriculum.id
    });

    await Summary.create({
      description: "A short description about you ",
      curriculumId: curriculum.id
    });

    const curriculum2 = await Curriculum.create({
      language: "spanish",
      userId: user.id
    });

    await Experience.create({
      position: "Posisión",
      place: "Nombre de la compañía",
      date: "Fecha ",
      info: "Información detallada del trabajo realizado",
      curriculumId: curriculum2.id
    });

    await Experience.create({
      position: "Posisión",
      place: "Nombre de la compañía",
      date: "Cuando ",
      info: "Información detallada del trabajo realizado",
      curriculumId: curriculum2.id
    });

    await Education.create({
      title: "Titulo Obtenido",
      place: "Nombre de la institución",
      date: "Fecha",
      curriculumId: curriculum2.id
    });

    await Education.create({
      title: "Titulo Obtenido",
      place: "Nombre de la institución",
      date: "Fecha",
      curriculumId: curriculum2.id
    });

    await Passion.create({
      area: "Area",
      description: "Cosas que te gusta hacer fuera del trabajo",
      curriculumId: curriculum2.id
    });

    await Passion.create({
      area: "Area",
      description: "Cosas que te gusta hacer fuera del trabajo",
      curriculumId: curriculum2.id
    });

    await Skill.create({
      area: "Area",
      tools: "Lista las herramientas que usas en el trabajo",
      curriculumId: curriculum2.id
    });
    await Skill.create({
      area: "Area",
      tools: "Lista las herramientas que usas en el trabajo",
      curriculumId: curriculum2.id
    });
    await Skill.create({
      area: "Area",
      tools: "Lista las herramientas que usas en el trabajo",
      curriculumId: curriculum2.id
    });
    await Skill.create({
      area: "Area",
      tools: "Lista las herramientas que usas en el trabajo",
      curriculumId: curriculum2.id
    });

    await Summary.create({
      description: "Una breve desctipción personal",
      curriculumId: curriculum2.id
    });

    res.status(201)
    console.log("DB user created", user)
    res.json(user)
  } else {
    await User.update(
      {
        name,
        avatar: picture
      },
      { where: { email: email } }
    )
    const updatedUser = await User.findOne({ where: { email: email } })
    res.status(201)
    res.json(updatedUser)
  };
});

module.exports = server;