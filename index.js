const server = require('./src/app.js');
const { conn, User, Experience, Education, Skill, Passion, Summary, Curriculum } = require('./src/db');

conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {  //process.env.PORT
    console.log(` listening at port 3001`); // eslint-disable-line no-console

    await User.create({
      "email": "santiabo@gmail.com",
      "password": "Xja97v",
      "name": "Santiago Aguirre",    
      "title": "Full Stack Developer",
      "mobile": "+541166735627",
      "city": "Argentina",
      "avatar": "https://res.cloudinary.com/dx9na6eh7/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1614516360/avatarImage/dbfcsegfyumhs5v638hm.png"
    });

    await Curriculum.create({
      "language": "english",
      "userId": "1"
    })

    await Experience.create({
      "curriculumId": 1,
      position: "Full stack Developer - Academic experience",
      place: "Soy Henry",
      date: " Feb 2021 - Argentina",
      info: `Developed a mobile e-bank app with React-Native, Expo and Redux as frameworks, used Paper for the styles.
        Made the database using MySQL and Sequelize with Dbeaver and postman as helping tools.
        Used Gmail API for e-mail authentication, fusionAuth for local autentication and expo API for loggin with biometricals, Bcrypt for encrypting the password in the database.`
    });

    await Experience.create({
      curriculumId: 1,
      position: "Full stack Developer  - Academic experience",
      place: "Soy Henry",
      date: " Jan 2021 - Argentina",
      info: ` `
    })

    await Education.create({
      curriculumId: 1,
      title: "Full stack Developer",
      place: "Soy Henry",
      date: " February 2021 "
    });

    await Education.create({
      "curriculumId": 1,
      title: "JavaScript Algorithms and Data Structures",
      place: "freeCodeCamp",
      date: " March 2021 "
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Coding",
      tools: `HTML CSS/CSS3 LESS StyledComponents Bootstrap
     JQuery JavaScript  React  Redux  SQL Sequelize  Postgresql Passport`
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Tools & Technologies",
      tools: `Visual Studio Code  Figma  Git  npm `
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Project Management",
      tools: `Airtable  Trello  Scrum Agile`
    });

    await Skill.create({
      "curriculumId": 1,
      area: "Languages",
      tools: `Spanish(native)   English(advanced)`
    });

    await Passion.create({
      "curriculumId": 1,
      area: "mind",
      description: `Healthy lifestyle, skateboarding and travel.`
    });

    await Passion.create({
      curriculumId: 1,
      area: "body",
      description: `Learning new tecnologies and languages.`
    });

    await Summary.create({
      "curriculumId": 1,
      description: `Full stack developer, proactive, fast learner with an advanced English level.`
    })



  //--------------------Curriculum[1] Spanish

  await Curriculum.create({
    "language": "spanish",
    "userId": "1"
  })

  await Experience.create({
    "curriculumId": 2,
    position: "Full stack Developer",
    place: "Soy Henry",
    date: " Enero 2021  - Argentina",
    info: `
    403 / 5000
    Resultados de traducción
    Creó una nueva aplicación de banco electrónico móvil con React-Native,
           Expo y Redux como frameworks y Paper para darle estilo.
          - Hice la base de datos usando MySQL y Sequelize con Dbeaver
           y cartero como herramientas de ayuda.
          - Se utilizó la API de Gmail para la autenticación de correo electrónico, fusionAuth para local
           API de autenticación y expo para loggin con biométricos, Bcrypt para
            cifrar la contraseña en la base de datos .`
  });

  await Experience.create({
    curriculumId: 2,
    position: "Full stack Developer",
    place: "Soy Henry",
    date: " Enero 2021 - Argentina",
    info: `434 / 5000
    Resultados de traducción
    - Trabajé en una aplicación web de comercio electrónico con React Redux en la interfaz,
         prestando atención a escribir código bien mantenido desde el principio.
                 - Realicé la base de datos usando Postgresql y Sequelize con Dbeaver y
         cartero como herramientas de ayuda.
                 - Se utilizó la estrategia de pasaporte local y portador con el token web Json para
                  verificar el inicio de sesión del usuario en el sitio. Y Bcrypt para cifrar el
         contraseña en la base de datos. `
  })

  await Education.create({
    curriculumId: 2,
    title: "Full stack Developer",
    place: "Soy Henry",
    date: " Feb 2021 - Argentina"
  });

  await Education.create({
    "curriculumId": 2,
    title: "JavaScript Algorithms and Data Structures",
    place: "freeCodeCamp",
    date: " Feb 2021 - Argentina"
  });

  await Skill.create({
    "curriculumId": 2,
    area: "Coding",
    tools: `HTML CSS/CSS3 LESS StyledComponents Bootstrap
   JQuery JavaScript  React  Redux  SQL Sequelize  Postgresql Passport`
  });

  await Skill.create({
    "curriculumId": 2,
    area: "Herramientas y tecnologias",
    tools: `Visual Studio Code  Figma  Git  npm `
  });

  await Skill.create({
    "curriculumId": 2,
    area: "Gestión de proyectos",
    tools: `Airtable  Trello  Scrum Agile`
  });

  await Skill.create({
    "curriculumId": 2,
    area: "Idiomas",
    tools: `Español(nativo)   ingles(avanzado)`
  });

  await Passion.create({
    "curriculumId": 2,
    area: "salud",
    description: `Vida sana, skateboard y viajar.`
  });

  await Passion.create({
    curriculumId: 2,
    area: "healt",
    description: `Aprender nuevas tecnologías e idiomas.`
  });

  await Summary.create({
    "curriculumId": 2,
    description: `Dessarrollador web full stack, proactivo, con avanzado nivel de inglés. Curioso por naturaleza.`
  });

});
});
